import { useState, useEffect } from "react";

interface DisplayConfig {
  parks: number[];
  rides: number[];
}

interface Park {
  id: number;
  name: string;
}

interface Ride {
  id: number;
  name: string;
  wait_time: number;
  is_open: boolean;
  park_id: number;
}

const Display = () => {
  const [config, setConfig] = useState<DisplayConfig>({ parks: [], rides: [] });
  const [parks, setParks] = useState<Park[]>([]);
  const [rides, setRides] = useState<Ride[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/fetch-display-config");
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        console.error("Failed to fetch display config:", err);
        setError("Failed to load display configuration.");
      }
    };

    fetchConfig();
    const interval = setInterval(fetchConfig, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const fetchParksAndRides = async () => {
      try {
        const parksResponse = await fetch("http://127.0.0.1:5000/parks");
        const parksData = await parksResponse.json();
        setParks(parksData);

        const ridesPromises = config.parks.map((parkId) =>
          fetch(`http://127.0.0.1:5000/rides/${parkId}`).then((res) => res.json())
        );

        const ridesData = await Promise.all(ridesPromises);
        const flattenedRides = ridesData.flat(); // Combine rides from all parks
        setRides(flattenedRides);
      } catch (err) {
        console.error("Failed to load parks and rides:", err);
        setError("Failed to load parks and rides.");
      }
    };

    if (config.parks.length > 0) {
      fetchParksAndRides();
    }
  }, [config]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
        Park Wait Times
      </h1>
      {parks.map((park) => (
        <div key={park.id} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{park.name}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rides
              .filter((ride) => ride.park_id === park.id && config.rides.includes(ride.id))
              .map((ride) => (
                <li
                  key={ride.id}
                  className={`p-6 shadow rounded-lg border ${
                    ride.is_open ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{ride.name}</h3>
                  <p className="text-sm text-gray-700">
                    Wait Time: <span className="font-bold">{ride.wait_time} minutes</span>
                  </p>
                  <p
                    className={`mt-2 font-medium ${
                      ride.is_open ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {ride.is_open ? "Open" : "Closed"}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Display;
