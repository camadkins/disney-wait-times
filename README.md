# Interactive Raspberry Pi Display (Archived)

## Overview

This project was an attempt to create an interactive display system for Disney park wait times. The system combined software and hardware to provide a dynamic, customizable experience. Due to shifting priorities, the project is now **archived** and no longer maintained.

### **Archived Status**

- This repository is **read-only**.
- No further updates or support will be provided.
- Feel free to fork the repository if you wish to continue the project.

## Features (Planned)

### Display Features

- Disney park wait times displayed on a two-way mirror monitor.
- Configurable themes for holidays and special events.
- Real-time updates with "last updated" timestamps.
- Constellation-themed loading animations during transitions.

### Dashboard Features

- Manage parks and rides for the display.
- Persist settings (parks, rides, and themes) across sessions.
- Notifications and logs for system events.
- Raspberry Pi remote management, including restarts and resource monitoring.

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

## Getting Started (Archived)

This project is no longer maintained. If you want to explore or reuse parts of it:

1. Clone the repository:

   ```bash
   git clone https://github.com/camadkins/disney-wait-times.git
   cd disney-wait-times
   ```

2. Follow the original setup instructions in this README to explore the codebase.

## Archive Goals

While the project was archived before full completion, its modular design and initial implementations are intended as a foundation for future exploration or enhancements by others.

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
