import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import ParksRides from "./pages/ParksRides";
import Themes from "./pages/Themes";
import SystemControl from "./pages/SystemControl";
import UserManagement from "./pages/UserManagement";
import NotificationsLogs from "./pages/NotificationsLogs";


const App = () => (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col">
        <div className="p-4 text-center text-2xl font-bold border-b border-blue-400">
          Control Panel
        </div>
        <ul className="flex-1 space-y-2 p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-blue-700 rounded transition"
                  : "block p-2 hover:bg-blue-700 rounded transition"
              }
            >
              Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/parks-rides"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-blue-700 rounded transition"
                  : "block p-2 hover:bg-blue-700 rounded transition"
              }
            >
              Parks & Rides
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/themes"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-blue-700 rounded transition"
                  : "block p-2 hover:bg-blue-700 rounded transition"
              }
            >
              Themes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/system-control"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-blue-700 rounded transition"
                  : "block p-2 hover:bg-blue-700 rounded transition"
              }
            >
              System Control
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-management"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-blue-700 rounded transition"
                  : "block p-2 hover:bg-blue-700 rounded transition"
              }
            >
              User Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications-logs"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-blue-700 rounded transition"
                  : "block p-2 hover:bg-blue-700 rounded transition"
              }
            >
              Notifications & Logs
            </NavLink>
          </li>
        </ul>
      </nav>


    {/* Main Content */}
    <div className="flex-1 bg-gray-100 p-6">
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/parks-rides" element={<ParksRides />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/system-control" element={<SystemControl />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/notifications-logs" element={<NotificationsLogs />} />
      </Routes>
    </div>
  </div>

  
);

export default App;
