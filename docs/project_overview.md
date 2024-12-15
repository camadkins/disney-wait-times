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
- Use an animated constellation-style loading screen for:
  - Raspberry Pi boot sequence.
  - Manual display restarts triggered from the Control Panel.
  - Display page transitions.
- Automatically update displayed data at configurable intervals.
- Store API responses locally to handle failures gracefully by:
  - Using the last successful API response if the API fails.
  - Displaying "last updated X seconds ago" accurately, even if the API doesn’t update.
  - Tracking API call statuses and errors.
- Display relevant metadata (e.g., "last updated X seconds ago").

#### 2. **Web Control Panel**

- **Park & Ride Management**:
  - Enable/disable parks and individual rides with real-time syncing to Display.
  - Persist settings across sessions.
  - Pull and display the full park list from the API with checkboxes for selection.
- **Theming**:
  - Switch between day/night modes.
  - Apply seasonal themes.
- **System Management**:
  - Restart Raspberry Pi or display program remotely.
  - View system stats (e.g., memory usage, network performance).
- **User Management**:
  - Create, edit, and delete users.
  - Admin and Editor roles with defined permissions.

#### 3. **Statistics and Notifications**

- **Historical stats**:
  - API call success/failure rates.
  - System resource usage.
- **Notification system**:
  - Categorize notifications by priority (e.g., urgent, info).
  - Enable/disable specific notifications.

#### 4. **Future Features**

- Interactive park maps.
- Modular widgets for the dashboard to allow customization.
- Advanced notifications for system errors and updates.

---

### **Project Structure**

```bash
project/
├── backend/          # Backend API handling and data processing.
│   ├── app.py        # Flask app handling API requests.
│   ├── tests/        # Unit tests for backend functionality.
├── frontend/         # Web dashboard and display interface.
│   ├── src/
│   │   ├── components/  # Reusable React components.
│   │   ├── pages/       # Route-specific React components.
│   │   ├── styles/      # Global and module-specific stylesheets.
│   │   └── utils/       # Utility functions and helpers.
├── raspberry_pi/     # Raspberry Pi setup scripts and configurations.
│   ├── boot/         # Scripts to initialize and launch the Display on boot.
├── docs/             # Documentation and help resources.
├── tests/            # Unit tests and testing utilities.
├── CHANGELOG.md      # Log of all changes made to the project.
└── README.md         # Project overview and instructions.
```

---

### **Blocks and Timeline**

#### **Block 1: Initial Setup and API Integration** ✅ Completed

- Set up the project folder structure and environment.
- Tested Queue-Times API integration.

#### **Block 2: Backend Organization and Error Handling** ✅ Completed

- Developed caching and logging systems.
- Documented backend architecture.

#### **Block 3: Frontend Setup** ✅ Completed

- Built foundational dashboard with Parks & Rides page.
- Added Tailwind CSS for consistent styling.

#### **Block 4: Dashboard-Display Integration** ✅ Completed

- Integrated backend and frontend for park/ride persistence.
- Created basic Display page with loading animations.

#### **Block 5: Raspberry Pi Integration** (In Progress)

- Auto-launch Display page on boot.
- Allow manual restarts via Control Panel.

#### **Block 6: Advanced Backend Features** (Upcoming)

- Add advanced endpoints for statistics and notifications.

#### **Block 7: Advanced Frontend Features** (Upcoming)

- Enhance user management, notifications, and themes.

#### **Block 8: Testing and Documentation** (Upcoming)

- Perform end-to-end testing and complete documentation.

#### **Block 9: Deployment and Release** (Upcoming)

- Deploy to Raspberry Pi in production.
- Release project on GitHub.

---

### **Timeline Summary**

- **Blocks 1-4**: Foundational setup and basic functionality.
- **Blocks 5-6**: Advanced backend and Raspberry Pi integration.
- **Blocks 7-8**: Frontend enhancement, testing, and documentation.
- **Block 9**: Deployment and release.
- **Block 10**: Post-release enhancements (ongoing).

---

### **Future Vision**

A polished, user-friendly system for displaying Disney park wait times with seamless Raspberry Pi integration. Designed to be modular, scalable, and easy to expand with future features.
