import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import DashboardHome from "./pages/DashboardHome";
import ParksRides from "./pages/ParksRides";
import Themes from "./pages/Themes";
import SystemControl from "./pages/SystemControl";
import UserManagement from "./pages/UserManagement";
import NotificationsLogs from "./pages/NotificationsLogs";
import DisplayControl from "./pages/DisplayControl";
import ControlPanelSettings from "./pages/ControlPanelSettings";
import Display from "./pages/Display";
import LoadingScreen from "./pages/LoadingScreen";

const AppLayout = () => {
  const location = useLocation();

  // Define routes that require full-screen mode (e.g., Display and Loading Screen)
  const isFullScreenRoute = ["/display", "/loading"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Menu */}
      {!isFullScreenRoute && <TopMenu />}

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        {!isFullScreenRoute && (
          <nav className="w-64 bg-gray-800 text-white p-4">
            <div className="text-xl font-bold mb-4">Control Panel</div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="block p-2 rounded hover:bg-gray-700 transition"
                >
                  Dashboard Home
                </a>
              </li>
              <li>
                <a
                  href="/parks-rides"
                  className="block p-2 rounded hover:bg-gray-700 transition"
                >
                  Parks & Rides
                </a>
              </li>
              <li>
                <a
                  href="/themes"
                  className="block p-2 rounded hover:bg-gray-700 transition"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  href="/display-control"
                  className="block p-2 rounded hover:bg-gray-700 transition"
                >
                  Display Control Panel
                </a>
              </li>
              <li>
                <a
                  href="/system-control"
                  className="block p-2 rounded hover:bg-gray-700 transition"
                >
                  System Control
                </a>
              </li>
              <li>
                <a
                  href="/user-management"
                  className="block p-2 rounded hover:bg-gray-700 transition"
                >
                  User Management
                </a>
              </li>
              <li>
                <a
                  href="/notifications-logs"
                  className="block p-2 rounded hover:bg-gray-700 transition"
                >
                  Notifications & Logs
                </a>
              </li>
              <li>
                <a
                  href="/control-panel-settings"
                  className="block p-2 rounded hover:bg-gray-700 transition"
                >
                  Control Panel Settings
                </a>
              </li>
            </ul>
          </nav>
        )}

        {/* Page Content */}
        <div className={`flex-1 bg-gray-100 ${isFullScreenRoute ? "" : "p-6"}`}>
          <Routes>
            {/* Main Control Panel Pages */}
            <Route path="/" element={<DashboardHome />} />
            <Route path="/parks-rides" element={<ParksRides />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/display-control" element={<DisplayControl />} />
            <Route path="/system-control" element={<SystemControl />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/notifications-logs" element={<NotificationsLogs />} />
            <Route path="/control-panel-settings" element={<ControlPanelSettings />} />

            {/* Full-Screen Routes */}
            <Route path="/display" element={<Display />} />
            <Route path="/loading" element={<LoadingScreen />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
