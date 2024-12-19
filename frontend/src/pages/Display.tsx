import { useTheme } from "../context/ThemeContext";
import BackgroundRenderer from "../components/BackgroundRenderer";

const Display = () => {
  const { theme, useTint } = useTheme();

  return (
    <div className="relative w-full h-screen text-white">
      {/* Background */}
      <BackgroundRenderer theme={theme} useTint={useTint} />

      {/* Content */}
      <div className="relative z-10 text-center p-8">
        {/* Title */}
        <h1
          className="text-4xl font-bold mb-4"
          style={{
            fontFamily: theme.fonts.title,
            color: theme.primaryColor,
          }}
        >
          Park Wait Times
        </h1>

        {/* Custom Boxes */}
        <div className="flex justify-between px-4 mb-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="w-1/4 p-4 bg-opacity-75 rounded"
              style={{
                backgroundColor: theme.secondaryColor,
                fontFamily: theme.fonts.customBoxes,
              }}
            >
              Custom Box {i}
            </div>
          ))}
        </div>

        {/* Park and Rides */}
        <div
          className="p-4 bg-opacity-75 rounded"
          style={{
            backgroundColor: theme.primaryColor,
            fontFamily: theme.fonts.parksRides,
          }}
        >
          <p>Park and Rides Area</p>
        </div>

        {/* Status */}
        <p
          className="mt-4 text-sm"
          style={{
            fontFamily: theme.fonts.status,
            color: theme.secondaryColor,
          }}
        >
          API last updated: 10 seconds ago | Display last updated: 5 seconds ago
        </p>
      </div>
    </div>
  );
};

export default Display;
