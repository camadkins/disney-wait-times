export const fetchRideData = async (): Promise<any> => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/rides`);
      if (!response.ok) {
        throw new Error(`Error fetching ride data: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export const fetchParkData = async (): Promise<any[]> => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/parks`);
      if (!response.ok) {
        throw new Error(`Error fetching park data: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  