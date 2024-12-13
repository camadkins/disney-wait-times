import { useState, useEffect } from "react";
import { fetchParkData, fetchRideData } from "../services/apiService";

interface Ride {
  id: number;
  name: string;
  wait_time: number;
  is_open: boolean;
  park_id: number; // Links rides to parks
}

interface Park {
  id: number;
  name: string;
  enabled: boolean; // Tracks if the park is selected
}

const ParksRides = () => {
  const [parks, setParks] = useState<Park[]>([]);
  const [rides, setRides] = useState<Ride[]>([]);
  const [filteredRides, setFilteredRides] = useState<Ride[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching parks and rides...");
        const parkData = await fetchParkData();
        console.log("Parks fetched:", parkData);
  
        const rideData = await fetchRideData();
        console.log("Rides fetched:", rideData);
  
        const parksWithState = parkData.map((park: Park) => ({
          ...park,
          enabled: false,
        }));
  
        setParks(parksWithState);
        setRides(rideData);
      } catch (err) {
        console.error("Error fetching parks and rides:", err);
        setError("Failed to load parks and rides data.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const togglePark = (parkId: number) => {
    // Toggle the park's enabled state
    const updatedParks = parks.map((park) =>
      park.id === parkId ? { ...park, enabled: !park.enabled } : park
    );
    setParks(updatedParks);

    // Update filtered rides based on enabled parks
    const enabledParkIds = updatedParks
      .filter((park) => park.enabled)
      .map((park) => park.id);

    const updatedFilteredRides = rides.filter((ride) =>
      enabledParkIds.includes(ride.park_id)
    );
    setFilteredRides(updatedFilteredRides);
  };

  const toggleRide = (rideId: number) => {
    // Toggle a ride's visibility in the filtered list
    setFilteredRides((prevRides) =>
      prevRides.map((ride) =>
        ride.id === rideId ? { ...ride, is_open: !ride.is_open } : ride
      )
    );
  };

  if (loading) {
    return <div>Loading parks and rides data...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
        Parks & Rides Configuration
      </h1>

      {/* Parks Section */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Parks</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parks.map((park) => (
            <li key={park.id} className="flex items-center gap-4 p-4 shadow">
              <span className="text-lg">{park.name}</span>
              <button
                onClick={() => togglePark(park.id)}
                className={`px-4 py-2 rounded ${
                  park.enabled ? "bg-green-600 text-white" : "bg-gray-300"
                }`}
              >
                {park.enabled ? "Enabled" : "Disabled"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Rides Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Rides</h2>
        {filteredRides.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRides.map((ride) => (
              <li key={ride.id} className="flex items-center gap-4 p-4 shadow">
                <span className="text-lg">{ride.name}</span>
                <button
                  onClick={() => toggleRide(ride.id)}
                  className={`px-4 py-2 rounded ${
                    ride.is_open ? "bg-green-600 text-white" : "bg-gray-300"
                  }`}
                >
                  {ride.is_open ? "Visible" : "Hidden"}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No rides available for the selected parks.</p>
        )}
      </div>
    </div>
  );
};

export default ParksRides;
