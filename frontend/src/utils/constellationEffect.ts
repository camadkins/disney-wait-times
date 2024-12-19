export const startConstellationEffect = () => {
  const canvas = document.getElementById("constellation-canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    console.error("Canvas context is not available.");
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars: { x: number; y: number; radius: number }[] = [];

  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3,
    });
  }

  const drawStars = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  };

  drawStars();
};
