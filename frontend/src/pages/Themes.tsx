import { useState, useEffect } from "react";
import { fetchThemes, saveTheme, deleteTheme } from "../services/apiService";
import { Theme } from "../context/ThemeContext";

const ThemesPage = () => {
  const [themes, setThemes] = useState<Theme[]>([]); // Explicitly type as Theme[]
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null); // Explicitly type

  useEffect(() => {
    const loadThemes = async () => {
      try {
        const fetchedThemes = await fetchThemes();
        setThemes(fetchedThemes);
      } catch (error) {
        console.error("Failed to fetch themes:", error);
      }
    };

    loadThemes();
  }, []);

  const handleThemeSelection = (themeName: string) => {
    const theme = themes.find((t) => t.name === themeName) || null;
    setSelectedTheme(theme);
  };

  const handleAddTheme = () => {
    setSelectedTheme({
      name: "",
      dayMode: { textColor: "", backgroundColor: "", accentColor: "" },
      nightMode: { textColor: "", backgroundColor: "", accentColor: "" },
      fonts: { title: "", parksRides: "", customBoxes: "", status: "" },
      backgroundType: "flat",
      primaryColor: "",
      secondaryColor: "",
    });
  };

  const handleSaveTheme = async () => {
    if (!selectedTheme) return;

    try {
      await saveTheme(selectedTheme);
      const updatedThemes = await fetchThemes();
      setThemes(updatedThemes);
      setSelectedTheme(null); // Reset selection after save
    } catch (error) {
      console.error("Failed to save theme:", error);
    }
  };

  const handleDeleteTheme = async () => {
    if (!selectedTheme) return;

    try {
      await deleteTheme(selectedTheme.name);
      const updatedThemes = await fetchThemes();
      setThemes(updatedThemes);
      setSelectedTheme(null);
    } catch (error) {
      console.error("Failed to delete theme:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Themes</h1>

      {/* Theme Selector */}
      <div className="mb-6">
        <select
          className="p-2 border rounded w-full"
          onChange={(e) => handleThemeSelection(e.target.value)}
          value={selectedTheme ? selectedTheme.name : ""}
        >
          <option value="" disabled>
            Select a Theme
          </option>
          {themes.map((theme: Theme) => (
            <option key={theme.name} value={theme.name}>
              {theme.name}
            </option>
          ))}
        </select>
        <button
          className="p-2 bg-blue-600 text-white rounded mt-2"
          onClick={handleAddTheme}
        >
          + Add Theme
        </button>
      </div>

      {/* Theme Details Form */}
      {selectedTheme && (
        <div className="border p-4 rounded mb-6">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={selectedTheme.name}
              onChange={(e) =>
                setSelectedTheme({ ...selectedTheme, name: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <h2 className="font-bold mb-2">Day Mode</h2>
            <label className="block mb-2">Text Color</label>
            <input
              type="color"
              value={selectedTheme.dayMode.textColor}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  dayMode: { ...selectedTheme.dayMode, textColor: e.target.value },
                })
              }
            />
            <label className="block mb-2">Background Color</label>
            <input
              type="color"
              value={selectedTheme.dayMode.backgroundColor}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  dayMode: {
                    ...selectedTheme.dayMode,
                    backgroundColor: e.target.value,
                  },
                })
              }
            />
            <label className="block mb-2">Accent Color</label>
            <input
              type="color"
              value={selectedTheme.dayMode.accentColor}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  dayMode: { ...selectedTheme.dayMode, accentColor: e.target.value },
                })
              }
            />
          </div>

          {/* Night Mode Configuration */}
          <div className="mb-4">
            <h2 className="font-bold mb-2">Night Mode</h2>
            <label className="block mb-2">Text Color</label>
            <input
              type="color"
              value={selectedTheme.nightMode.textColor}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  nightMode: { ...selectedTheme.nightMode, textColor: e.target.value },
                })
              }
            />
            <label className="block mb-2">Background Color</label>
            <input
              type="color"
              value={selectedTheme.nightMode.backgroundColor}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  nightMode: {
                    ...selectedTheme.nightMode,
                    backgroundColor: e.target.value,
                  },
                })
              }
            />
            <label className="block mb-2">Accent Color</label>
            <input
              type="color"
              value={selectedTheme.nightMode.accentColor}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  nightMode: { ...selectedTheme.nightMode, accentColor: e.target.value },
                })
              }
            />
          </div>

          {/* Fonts Configuration */}
          <div className="mb-4">
            <h2 className="font-bold mb-2">Fonts</h2>
            <label className="block mb-2">Title Font</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={selectedTheme.fonts.title}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  fonts: { ...selectedTheme.fonts, title: e.target.value },
                })
              }
            />
            <label className="block mb-2">Parks/Rides Font</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={selectedTheme.fonts.parksRides}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  fonts: { ...selectedTheme.fonts, parksRides: e.target.value },
                })
              }
            />
            <label className="block mb-2">Custom Boxes Font</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={selectedTheme.fonts.customBoxes}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  fonts: { ...selectedTheme.fonts, customBoxes: e.target.value },
                })
              }
            />
            <label className="block mb-2">Status Font</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={selectedTheme.fonts.status}
              onChange={(e) =>
                setSelectedTheme({
                  ...selectedTheme,
                  fonts: { ...selectedTheme.fonts, status: e.target.value },
                })
              }
            />
          </div>

          {/* Buttons */}
          <button
            className="p-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={handleSaveTheme}
          >
            Save Theme
          </button>
          <button
            className="p-2 bg-red-600 text-white rounded hover:bg-red-700 ml-4"
            onClick={handleDeleteTheme}
          >
            Delete Theme
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemesPage;
