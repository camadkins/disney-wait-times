import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { fetchThemes } from "../services/apiService";
import { Theme } from "../context/ThemeContext";
import { useTheme } from "../context/ThemeContext";

const DisplayControlPage = () => {
  const navigate = useNavigate(); // For navigation
  const { theme, setTheme, useTint, setUseTint } = useTheme();
  const [themes, setThemes] = useState<Theme[]>([]);
  const [backgrounds, setBackgrounds] = useState<string[]>([]);
  const [selectedBackground, setSelectedBackground] = useState<string>("");
  const [flatColor, setFlatColor] = useState<string>("#ffffff"); // Flat color picker state

  useEffect(() => {
    const loadThemes = async () => {
      try {
        const fetchedThemes = await fetchThemes();
        setThemes(fetchedThemes);
      } catch (error) {
        console.error("Failed to fetch themes:", error);
      }
    };

    const loadBackgrounds = async () => {
      setBackgrounds(["Flat Color", "Static Image", "Video", "Dynamic Animation"]);
    };

    loadThemes();
    loadBackgrounds();
  }, []);

  const handleThemeChange = (themeName: string) => {
    const selected = themes.find((t) => t.name === themeName);
    if (selected) setTheme(selected);
  };

  const handleBackgroundChange = (background: string) => {
    setSelectedBackground(background);
    if (background !== "Flat Color") setFlatColor("#ffffff"); // Reset flat color
  };

  const handleAPIRefresh = () => {
    console.log("Refreshing API data...");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Display Controls</h1>

      {/* Theme Selector */}
      <div className="mb-6">
        <label className="block mb-2 font-bold">Theme Selector</label>
        <select
          className="p-2 border rounded w-full"
          onChange={(e) => handleThemeChange(e.target.value)}
          value={theme?.name || ""}
        >
          <option value="" disabled>
            Select a Theme
          </option>
          {themes.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <button
          className="p-2 bg-blue-600 text-white rounded mt-2"
          onClick={() => navigate("/themes", { state: { editTheme: theme?.name } })}
        >
          Edit Selected Theme
        </button>
      </div>

      {/* Background Selector */}
      <div className="mb-6">
        <label className="block mb-2 font-bold">Background Selector</label>
        <select
          className="p-2 border rounded w-full"
          onChange={(e) => handleBackgroundChange(e.target.value)}
          value={selectedBackground}
        >
          {backgrounds.map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>

        {/* Flat Color Picker */}
        {selectedBackground === "Flat Color" && (
          <div className="mt-4">
            <label className="block mb-2 font-bold">Select Flat Color</label>
            <input
              type="color"
              value={flatColor}
              onChange={(e) => setFlatColor(e.target.value)}
              className="w-full h-10 cursor-pointer"
            />
            <input
              type="text"
              value={flatColor}
              onChange={(e) => setFlatColor(e.target.value)}
              placeholder="#ffffff"
              className="p-2 border rounded w-full mt-2"
            />
          </div>
        )}
      </div>

      {/* Day/Night Mode Toggle */}
      <div className="mb-6">
        <button
          className="p-2 bg-gray-800 text-white rounded"
          onClick={() => console.log("Toggling Day/Night Mode")}
        >
          Toggle Day/Night Mode
        </button>
      </div>

      {/* Tint Overlay Toggle */}
      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={useTint}
            onChange={() => setUseTint(!useTint)}
            className="mr-2"
          />
          <span>Enable Tint Overlay</span>
        </label>
      </div>

      {/* API Refresh */}
      <div className="mb-6">
        <button
          className="p-2 bg-green-600 text-white rounded"
          onClick={handleAPIRefresh}
        >
          Refresh API Data
        </button>
      </div>
    </div>
  );
};

export default DisplayControlPage;
