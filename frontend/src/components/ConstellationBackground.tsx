import React, { useRef, useEffect } from "react";

interface ConstellationProps {
  theme?: {
    starColor: string;
    lineColor: string;
    bgColor: string;
    speed?: number;
    density?: number;
  };
}

const ConstellationBackground: React.FC<ConstellationProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const stars: { x: number; y: number; vx: number; vy: number }[] = [];
    const { innerWidth: width, innerHeight: height } = window;
    const speed = theme?.speed || 0.5;
    const density = theme?.density || 100;

    canvas.width = width;
    canvas.height = height;

    // Initialize stars
    for (let i = 0; i < density; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = theme?.bgColor || "black";
      ctx.fillRect(0, 0, width, height);

      // Draw stars and connections
      stars.forEach((star, i) => {
        star.x += star.vx;
        star.y += star.vy;

        // Bounce off edges
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = theme?.starColor || "white";
        ctx.fill();

        for (let j = i + 1; j < stars.length; j++) {
          const other = stars[j];
          const distance = Math.sqrt(
            (star.x - other.x) ** 2 + (star.y - other.y) ** 2
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = theme?.lineColor || "rgba(255, 255, 255, 0.5)";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default ConstellationBackground;
