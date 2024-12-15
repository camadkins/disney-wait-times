# Interactive Raspberry Pi Display

## Overview

This project is an interactive display system for Disney park wait times. The system combines software and hardware to provide a dynamic, customizable experience. It features a **Display**, which showcases park wait times on a two-way mirror monitor, and a **Dashboard**, which serves as a web-based control panel for managing the system.

## Features

### Display Features

- Showcases Disney park wait times using the Queue-Times API.
- Grouped by parks, with real-time updates.
- Configurable themes for holidays and special events.
- Includes a "last updated" timestamp for reliability.
- Displays constellation-themed loading animations during transitions.

### Dashboard Features

- Manage parks and rides to control what is displayed on the mirror.
- Persist settings (parks, rides, and themes) across sessions.
- Themed layout configurations for special occasions.
- User management (Admin/Editor roles) with permissions.
- Notifications and logs for system events.
- Remote management of the Raspberry Pi, including system restarts and resource monitoring.

### Raspberry Pi Integration

- Boots into a custom program that automatically launches the Display in fullscreen mode.
- Receives real-time updates from the Dashboard for a seamless experience.
- Easily restart the Display via the Control Panel.

## Project Structure

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

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/camadkins/disney-wait-times.git
cd disney-wait-times
```

### Install Backend and Frontend Dependencies

#### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. (Optional) Configure the environment variables for API and cache handling.

#### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

### Usage

- The **Dashboard** is accessible via `http://localhost:5173/`.
- The **Display** system will run automatically on the Raspberry Pi.

### Notes

- Ensure environment variables (`.env`) are configured for API and database connections.
- Selected parks and rides persist in the backend and are synced across sessions.
- Display updates are applied in real-time when settings are changed in the Dashboard.

## Goals

- Create a seamless, user-friendly system for managing and displaying Disney park wait times.
- Integrate a modular and scalable design for future enhancements, such as ride status notifications and multi-mirror setups.
- Support advanced features like user role management, system monitoring, and historical data tracking.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
