import { useState, useEffect } from "react";
import {
  fetchParks,
  fetchRidesByPark,
  saveSelections,
  fetchSelections,
} from "../services/apiService";

interface Park {
  id: number;
  name: string;
}

interface Ride {
  id: number;
  name: string;
  wait_time: number;
  is_open: boolean;
}

const ParksRides = () => {
  const [parks, setParks] = useState<Park[]>([]);
  const [rides, setRides] = useState<Record<number, Ride[]>>({});
  const [selectedParks, setSelectedParks] = useState<Record<number, boolean>>(
    {}
  );
  const [selectedRides, setSelectedRides] = useState<Record<number, boolean>>(
    {}
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadParks = async () => {
      try {
        const parksData = await fetchParks();
        setParks(parksData);

        const selections = await fetchSelections();
        setSelectedParks(selections.parks || {});
        setSelectedRides(selections.rides || {});
      } catch (err) {
        setError("Failed to load parks. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadParks();
  }, []);

  useEffect(() => {
    const loadRides = async (parkId: number) => {
      if (!parkId || parkId <= 0) {
        console.error("Invalid parkId provided:", parkId);
        return;
      }

      try {
        const ridesData = await fetchRidesByPark(parkId);
        setRides((prevRides) => ({ ...prevRides, [parkId]: ridesData }));
      } catch (error) {
        console.error(`Failed to fetch rides for park ${parkId}:`, error);
      }
    };

    Object.keys(selectedParks)
      .filter((parkId) => selectedParks[parseInt(parkId)])
      .forEach((parkId) => loadRides(parseInt(parkId)));
  }, [selectedParks]);

  const handleParkCheckboxChange = (parkId: number) => {
    setSelectedParks((prevSelectedParks) => {
      const newSelectedParks = {
        ...prevSelectedParks,
        [parkId]: !prevSelectedParks[parkId],
      };

      if (!newSelectedParks[parkId]) {
        setRides((prevRides) => {
          const { [parkId]: _, ...remainingRides } = prevRides;
          return remainingRides;
        });
      }

      return newSelectedParks;
    });
  };

  const handleRideCheckboxChange = (rideId: number) => {
    setSelectedRides((prevSelectedRides) => ({
      ...prevSelectedRides,
      [rideId]: !prevSelectedRides[rideId],
    }));
  };

  const saveSettings = async () => {
    try {
      await saveSelections({
        parks: selectedParks,
        rides: selectedRides,
      });
      alert("Selections saved successfully!");
    } catch (err) {
      console.error("Failed to save selections:", err);
      alert("Failed to save selections. Please try again.");
    }
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
        Parks & Rides
      </h1>

      <h2 className="text-2xl font-bold mb-4">Select Parks</h2>
      <ul className="mb-6">
        {parks.map((park) => (
          <li key={park.id} className="flex items-center">
            <input
              type="checkbox"
              checked={!!selectedParks[park.id]}
              onChange={() => handleParkCheckboxChange(park.id)}
              className="mr-2"
            />
            <label>{park.name}</label>
          </li>
        ))}
      </ul>

      {Object.keys(rides).length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select Rides</h2>
          {Object.entries(rides).map(([parkId, parkRides]) => (
            <div key={parkId}>
              <h3 className="text-xl font-bold mt-4 mb-2">
                Rides in {parks.find((p) => p.id === parseInt(parkId))?.name}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {parkRides.map((ride) => (
                  <li
                    key={ride.id}
                    className={`p-6 shadow rounded-lg border cursor-pointer ${
                      ride.is_open ? "bg-green-50" : "bg-red-50"
                    }`}
                    onClick={() => handleRideCheckboxChange(ride.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{ride.name}</h3>
                      <input
                        type="checkbox"
                        checked={!!selectedRides[ride.id]}
                        onChange={(e) => e.stopPropagation()}
                        className="cursor-pointer"
                      />
                    </div>
                    <p className="text-sm text-gray-700">
                      Wait Time:{" "}
                      <span className="font-bold">{ride.wait_time} minutes</span>
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
      )}

      <button
        onClick={saveSettings}
        className="mt-6 p-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Save Selections
      </button>
    </div>
  );
};

export default ParksRides;
