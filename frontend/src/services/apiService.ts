import axios from "axios";
import { Theme } from "../context/ThemeContext";

const BASE_URL = "http://127.0.0.1:5000"; // Flask's default address

export const fetchParks = async (): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/parks`);
    if (!response.ok) {
      throw new Error(`Error fetching parks: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching parks:", error);
    throw error;
  }
};

export const fetchRidesByPark = async (parkId: number): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/rides/${parkId}`); // Removed extra `}`
    if (!response.ok) {
      throw new Error(`Error fetching rides for park ${parkId}: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching rides for park ${parkId}:`, error);
    throw error;
  }
};

export const saveSelections = async (selections: {
  parks: Record<number, boolean>;
  rides: Record<number, boolean>;
}): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/update-selections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selections),
    });
    if (!response.ok) {
      throw new Error(`Error saving selections: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Failed to save selections:", error);
    throw error;
  }
};


export const fetchSelections = async (): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/fetch-selections`);
    if (!response.ok) {
      throw new Error(`Error fetching selections: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching selections:", error);
    throw error;
  }
};

export const fetchSystemStatus = async () => {
  const response = await fetch(`${BASE_URL}/system-status`);
  if (!response.ok) {
    throw new Error("Failed to fetch system status");
  }
  return response.json();
};

export const fetchRecentLogs = async () => {
  const response = await fetch(`${BASE_URL}/recent-logs`);
  if (!response.ok) {
    throw new Error("Failed to fetch recent logs");
  }
  return response.json();
};

// Fetch all themes
export const fetchThemes = async (): Promise<Theme[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/themes`);
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Invalid response format:", response.data);
      throw new Error("Invalid themes response: Expected an array.");
    }
  } catch (error) {
    console.error("Error fetching themes:", error);
    throw error;
  }
};


// Save a new or updated theme
export const saveTheme = async (theme: Theme): Promise<void> => {
  await axios.post(`${BASE_URL}/themes`, theme);
};

// Delete a theme by its name or ID
export const deleteTheme = async (themeName: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/themes/${themeName}`);
};