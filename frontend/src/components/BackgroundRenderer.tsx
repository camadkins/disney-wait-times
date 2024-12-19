import { useEffect } from "react";
import { startConstellationEffect } from "../utils/constellationEffect";
import { Theme } from "../context/ThemeContext";

const BackgroundRenderer = ({
  theme,
  useTint,
}: {
  theme: Theme;
  useTint: boolean;
}) => {
  useEffect(() => {
    if (theme.backgroundType === "animation" && theme.animationType === "constellation") {
      startConstellationEffect();
    }
  }, [theme.backgroundType, theme.animationType]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{
        background:
          theme.backgroundType === "flat"
            ? theme.dayMode.backgroundColor // Adjust this for day/night mode
            : theme.backgroundType === "static" && theme.backgroundPath
            ? `url(${theme.backgroundPath})`
            : "none",
        backgroundSize: theme.backgroundType === "static" ? "cover" : undefined,
        opacity: useTint ? 0.8 : 1,
      }}
    />
  );
};

export default BackgroundRenderer;
