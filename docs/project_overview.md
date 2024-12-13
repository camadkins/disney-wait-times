# Project Overview: Interactive Raspberry Pi Display with Web Dashboard

## **Project Goal**

To create an interactive display system for Disney park wait times, combining software and hardware. The system will:

- Pull data from the Queue-Times API.
- Display it on a monitor embedded in a two-way mirror.
- Be remotely managed via a web-based control panel.
- Support themes, statistics tracking, user roles, and future expansion.

---

### **Core Features**

#### 1. **Display System**

- Pull live wait time data from the Queue-Times API.
- Dynamically showcase data in a styled grid layout.
- Implement themes for holidays/events (e.g., Christmas, Halloween).
- Use an animated constellation-style loading screen.
- Automatically update displayed data at configurable intervals.
- Store API responses locally to handle failures gracefully by:
  - Using the last successful API response if the API fails.
  - Displaying "last updated X seconds ago" accurately, even if the API doesn’t update.
  - Tracking API call statuses and errors.
- Display relevant metadata (e.g., "last updated X seconds ago").

#### 2. **Web Control Panel**

- **Park & Ride Management**:
  - Enable/disable parks and individual rides.
  - Fine-tune displayed information (e.g., include Lightning Lane times).
  - Pull and display the full park list from the API with checkboxes for selection.
  - Allow Admins to configure which parks and rides are pulled and displayed.
- **System Management**:
  - Restart Raspberry Pi or display program.
  - View system stats (e.g., memory usage, network performance).
- **Theming**:
  - Switch between day/night modes.
  - Apply seasonal themes.
- **User Management**:
  - Create, edit, and delete users.
  - Admin and Editor roles with defined permissions.

#### 3. **Statistics and Notifications**

- View historical stats:
  - API call success/failure rates.
  - System resource usage.
- Notification system:
  - Categorize notifications by priority (e.g., urgent, info).
  - Enable/disable specific notifications.

#### 4. **Future Features**

- Interactive park maps.
- Advanced notifications for system errors and updates.
- Modular widgets for the dashboard to allow customization.

---

### **Project Structure**

``` bash
project/
├── backend/          # Backend API handling and data processing.
├── frontend/         # Web dashboard and display interface.
├── raspberry_pi/     # Raspberry Pi setup scripts and configurations.
├── docs/             # Documentation and help resources.
├── tests/            # Unit tests and testing utilities.
└── README.md         # Project overview and instructions.
```

---

### **Blocks and Timeline**

#### **Block 1: Initial Setup and API Integration** ✅ Completed

- Set up the project folder structure.
- Created and updated `README.md` and `LICENSE.md`.
- Configured the development environment (Python, pip, VS Code settings).
- Installed dependencies and tested the Queue-Times API.

#### **Block 2: Backend Organization and Error Handling** (1 Week)

- Create modules in the `backend/` folder for:
  - Fetching API data.
  - Parsing and formatting data.
  - Error handling and logging.
- Cache API responses locally to handle errors gracefully.
- Write unit tests for API-related functions.
- Document backend architecture in `docs/`.

#### **Block 3: Frontend Setup** (1-2 Weeks)

- Initialize a frontend framework (React.js or Vue.js).
- Set up basic pages for:
  - Dashboard display.
  - Control panel.
  - Login and user management.
- Add Tailwind CSS for basic styling.

#### **Block 4: Basic API Integration with Frontend** (1-2 Weeks)

- Connect the frontend to the backend API.
- Fetch and display real-time data in the dashboard.
- Implement a “last updated” timestamp on the display page.

#### **Block 5: Advanced Backend Features** (2 Weeks)

- Add advanced features to the backend:
  - Support for park and ride management settings.
  - Endpoint for statistics tracking (API call success rates, system performance).
  - Notifications endpoint for system errors and updates.
- Write additional tests for these features.

#### **Block 6: Raspberry Pi Integration** (2-3 Weeks)

- Install and configure Raspberry Pi OS.
- Develop scripts to:
  - Auto-launch the display program.
  - Handle control panel commands (e.g., reboot, update).
- Brainstorm and develop a lightweight Python program to run directly on the Pi without an OS.
- Test the setup on Raspberry Pi hardware.

#### **Block 7: Advanced Frontend Features** (2-3 Weeks)

- Implement control panel settings for park/ride management.
- Add user roles and permissions (Admin/Editor).
- Develop statistics and notifications pages.
- Improve theming and responsiveness.

#### **Block 8: Testing and Documentation** (2 Weeks)

- Perform end-to-end testing of the entire system.
- Write detailed documentation for:
  - Installation and deployment.
  - User and admin guides.
  - API usage.
- Prepare for migration to the production environment.

#### **Block 9: Deployment and Release** (1 Week)

- Migrate the system to a production environment.
- Optimize for a forkable, open-source release.
- Publish the project on GitHub with a detailed release note.

#### **Block 10: Post-Release Enhancements** (Ongoing)

- Add features based on user feedback.
- Implement interactive park maps.
- Explore advanced notifications and modular widgets.

---

### **Timeline Summary**

- **Blocks 1-4**: Setup and foundational development (4-6 weeks).
- **Blocks 5-7**: Advanced features and integration (6-8 weeks).
- **Blocks 8-9**: Testing, documentation, and release (3 weeks).
- **Block 10**: Post-release enhancements (ongoing).
- **Total Time Estimate**: 13-18 weeks.

### **Future Vision**

The final system will be a polished and user-friendly display and control panel, easily deployable in other environments. It will provide a seamless experience for monitoring Disney park wait times with potential for future expansion into additional features.
