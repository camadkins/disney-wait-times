import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchSystemStatus, fetchRecentLogs } from "../services/apiService";

interface SystemStatus {
  cpuUsage: number;
  memoryUsage: number;
}

interface Log {
  id: number;
  message: string;
  severity: string;
}

const DashboardHome = () => {
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [logs, setLogs] = useState<Log[]>([]);
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    // Fetch system status
    const loadSystemStatus = async () => {
      try {
        const status = await fetchSystemStatus();
        setSystemStatus(status);

        // Update chart data
        setChartData([
          { name: "CPU Usage", value: status.cpuUsage },
          { name: "Memory Usage", value: status.memoryUsage },
        ]);
      } catch (error) {
        console.error("Failed to fetch system status:", error);
      }
    };

    // Fetch recent logs
    const loadRecentLogs = async () => {
      try {
        const logs = await fetchRecentLogs();
        setLogs(logs);
      } catch (error) {
        console.error("Failed to fetch recent logs:", error);
      }
    };

    loadSystemStatus();
    loadRecentLogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Dashboard Home</h1>

      {/* System Status */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">System Status</h2>
        {systemStatus ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-lg font-semibold">CPU Usage</p>
              <p className="text-xl font-bold">{systemStatus.cpuUsage}%</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-lg font-semibold">Memory Usage</p>
              <p className="text-xl font-bold">{systemStatus.memoryUsage}%</p>
            </div>
          </div>
        ) : (
          <p>Loading system status...</p>
        )}
      </div>

      {/* Bar Chart */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Resource Usage Chart</h2>
        <div className="h-64">
          <ResponsiveContainer>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Logs */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Logs</h2>
        {logs.length > 0 ? (
          <ul className="space-y-2">
            {logs.map((log) => (
              <li key={log.id} className="p-4 bg-gray-100 rounded-lg shadow">
                <p className={`font-bold ${log.severity === "error" ? "text-red-600" : "text-gray-800"}`}>
                  {log.severity.toUpperCase()}
                </p>
                <p>{log.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent logs available.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
