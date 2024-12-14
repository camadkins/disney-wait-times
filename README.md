# Interactive Raspberry Pi Display

## Overview

This project is an interactive display system for Disney park wait times. The system combines software and hardware to provide a dynamic, customizable experience. It features a **Display**, which showcases park wait times on a two-way mirror monitor, and a **Dashboard**, which serves as a web-based control panel for managing the system.

## Features

- **Display Features**:
  - Showcases Disney park wait times using the Queue-Times API.
  - Grouped by parks, with real-time updates.
  - Configurable themes for holidays and special events.
  - Includes a "last updated" timestamp for reliability.

- **Dashboard Features**:
  - Manage parks and rides to control what is displayed on the monitor.
  - Themed layout configurations.
  - User management (Admin/Editor roles) with permissions.
  - Notifications and logs for system events.
  - Remote management of the Raspberry Pi, including system restarts and resource monitoring.

## Project Structure

```bash
project/
├── backend/          # Backend API handling and data processing.
├── frontend/         # Web dashboard and display interface.
│   ├── src/
│   │   ├── components/  # Reusable React components.
│   │   ├── pages/       # Route-specific React components.
│   │   ├── styles/      # Global and module-specific stylesheets.
│   │   └── utils/       # Utility functions and helpers.
├── raspberry_pi/     # Raspberry Pi setup scripts and configurations.
├── docs/             # Documentation and help resources.
├── tests/            # Unit tests and testing utilities.
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

3. (Optional) Configure the environment variables.

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
- The **Display** system will run on the Raspberry Pi.

### Notes

- Ensure that the environment variables (`.env`) for the API and database are correctly configured for both the backend and frontend.
- To avoid resetting selected boxes in the Dashboard (parks, rides, etc.) after a refresh, settings persist in local storage or a backend database.

## Goals

- Develop a polished, user-friendly system for displaying Disney park wait times.
- Integrate a modular and scalable design for future enhancements.
- Support advanced features such as user role management, notifications, and historical data tracking.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
