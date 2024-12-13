import { useState } from 'react';

const Dashboard = () => {
  const [parks, setParks] = useState([
    { id: 1, name: 'Magic Kingdom', waitTime: '15 mins' },
    { id: 2, name: 'Epcot', waitTime: '25 mins' },
    { id: 3, name: 'Hollywood Studios', waitTime: '10 mins' },
    { id: 4, name: 'Animal Kingdom', waitTime: '5 mins' },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parks.map((park) => (
          <div key={park.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-bold">{park.name}</h2>
            <p>Current Wait Time: {park.waitTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
