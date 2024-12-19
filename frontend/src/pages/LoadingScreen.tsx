import React from "react";
import ConstellationBackground from "../components/ConstellationBackground";

const LoadingScreen: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ConstellationBackground
        theme={{
          starColor: "white",
          lineColor: "rgba(255, 255, 255, 0.5)",
          bgColor: "black",
          speed: 1,
          density: 150,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
