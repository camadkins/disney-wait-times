import { useState, useEffect } from "react";
import { mockParks } from "../data/mockData";

const ParksRides = () => {
  const [parks] = useState(mockParks);
  const [selectedParks, setSelectedParks] = useState<string[]>([]);
  const [selectedRides, setSelectedRides] = useState<{ [parkId: string]: string[] }>({});

  // Load selections from localStorage on component mount
  useEffect(() => {
    const storedParks = localStorage.getItem("selectedParks");
    const storedRides = localStorage.getItem("selectedRides");
    if (storedParks) setSelectedParks(JSON.parse(storedParks));
    if (storedRides) setSelectedRides(JSON.parse(storedRides));
  }, []);

  // Toggle park selection and persist it in localStorage
  const toggleParkSelection = (parkId: string) => {
    const updatedParks = selectedParks.includes(parkId)
      ? selectedParks.filter((id) => id !== parkId)
      : [...selectedParks, parkId];
    setSelectedParks(updatedParks);
    localStorage.setItem("selectedParks", JSON.stringify(updatedParks));
  };

  // Toggle ride selection for a specific park and persist it
  const toggleRideSelection = (parkId: string, rideId: string) => {
    const updatedRides = {
      ...selectedRides,
      [parkId]: selectedRides[parkId]?.includes(rideId)
        ? selectedRides[parkId].filter((id) => id !== rideId)
        : [...(selectedRides[parkId] || []), rideId],
    };
    setSelectedRides(updatedRides);
    localStorage.setItem("selectedRides", JSON.stringify(updatedRides));
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Parks & Rides</h1>
      <ul className="space-y-4">
        {parks.map((park) => (
          <li key={park.id} className="p-4 shadow rounded-lg bg-white border">
            {/* Park Header with Checkbox */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{park.name}</h2>
              <input
                type="checkbox"
                checked={selectedParks.includes(park.id)}
                onChange={() => toggleParkSelection(park.id)}
                className="w-6 h-6"
              />
            </div>
            {/* Rides List */}
            <ul className="mt-4 pl-4">
              {park.rides.map((ride) => (
                <li
                  key={ride.id}
                  className={`py-2 flex items-center ${
                    ride.is_open ? "text-green-700" : "text-red-700"
                  }`}
                >
                  <span className="flex-1">{ride.name} ({ride.is_open ? "Open" : "Closed"})</span>
                  <input
                    type="checkbox"
                    checked={selectedRides[park.id]?.includes(ride.id) || false}
                    onChange={() => toggleRideSelection(park.id, ride.id)}
                    className="w-6 h-6"
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParksRides;
