import { createContext, useContext, useState, ReactNode } from "react";


export type BackgroundType = "flat" | "static" | "animation" | "dynamic";
export type AnimationType = "constellation" | "pumpkins" | "none";

export interface Theme {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundType: BackgroundType;
  backgroundPath?: string; // Optional for "static" or "animation"
  animationType?: AnimationType; // Optional for "animation"
  fonts: {
    title: string;
    customBoxes: string;
    parksRides: string;
    status: string;
  };
  dayMode: {
    textColor: string;
    backgroundColor: string;
    accentColor: string;
  };
  nightMode: {
    textColor: string;
    backgroundColor: string;
    accentColor: string;
  };
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  useTint: boolean;
  setUseTint: (value: boolean) => void;
}

const defaultTheme: Theme = {
  name: "Default",
  primaryColor: "#1e3a8a",
  secondaryColor: "#4b5563",
  backgroundType: "dynamic",
  backgroundPath: "",
  animationType: "constellation",
  fonts: {
    title: "Arial, sans-serif",
    parksRides: "Verdana, sans-serif",
    customBoxes: "Georgia, serif",
    status: "Courier New, monospace",
  },
  dayMode: {
    textColor: "#ffffff",
    backgroundColor: "#1e3a8a",
    accentColor: "#4b5563",
  },
  nightMode: {
    textColor: "#000000",
    backgroundColor: "#111827",
    accentColor: "#6b7280",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [useTint, setUseTint] = useState<boolean>(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, useTint, setUseTint }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
