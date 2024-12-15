# Frontend Documentation

## Overview

The frontend of the Interactive Raspberry Pi Display project is a React-based web application built with TypeScript. It serves two primary roles:

1. **Dashboard**: A control panel for managing parks, rides, themes, and system settings.
2. **Display**: A presentation layer for showcasing Disney park wait times on a two-way mirror monitor.

The frontend communicates with the backend via RESTful APIs and uses Tailwind CSS for styling and responsiveness.

---

## Structure

The frontend is organized into several directories for modularity and scalability:

```bash
frontend/
├── src/
│   ├── components/      # Reusable UI components.
│   ├── pages/           # Route-specific React components.
│   ├── services/        # API service modules.
│   ├── styles/          # Global and page-specific styles.
│   └── utils/           # Utility functions.
├── public/              # Static files (index.html, assets, etc.).
├── tests/               # Frontend unit and integration tests.
└── README.md            # Frontend-specific instructions.
```

---

## Installation

### Prerequisites

Ensure the following are installed:

- Node.js (v16+ recommended)
- npm or yarn

### Steps

1. Navigate to the `frontend/` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Access the Dashboard in your browser:

   ```bash
   http://localhost:5173/
   ```

---

## Pages

### Dashboard Pages

#### **Dashboard Home** (`DashboardHome.tsx`)

The landing page for the control panel. It provides quick access to the most frequently used features.

#### **Parks & Rides** (`ParksRides.tsx`)

- Manage displayed parks and rides.
- Checkboxes allow toggling visibility.
- Updates are saved persistently to the backend.

#### **Themes** (`Themes.tsx`)

- Manage seasonal and custom themes for the Display.
- Options include day/night modes and holiday themes.

#### **System Control** (`SystemControl.tsx`)

- Control Raspberry Pi system operations.
- Features include restarting the Display and monitoring system stats.

#### **User Management** (`UserManagement.tsx`)

- Manage users and roles (Admin/Editor).
- Permissions restrict access to critical settings.

#### **Notifications & Logs** (`NotificationsLogs.tsx`)

- Display system notifications and logs.
- Categories include system health, updates, and errors.

### Display Page

#### **Display** (`Display.tsx`)

- Showcases park wait times grouped by parks.
- Displays metadata such as "last updated" timestamps.
- Includes support for themes and animations.

---

## Components

### **Reusable Components**

#### **Sidebar Navigation**

- Provides navigation links for Dashboard pages.
- Highlights active routes for user clarity.

#### **Loading Animation**

- Used on the Display page for transitions and startup sequences.

#### **Checkbox**

- Custom-styled checkbox with responsive design.

#### **Card**

- Modular card layout for parks, rides, and system metrics.

---

## API Integration

The frontend communicates with the backend through a centralized API service (`src/services/apiService.ts`).

### Example Services

#### Fetch Parks

```typescript
export const fetchParks = async (): Promise<Park[]> => {
  const response = await fetch(`${BASE_URL}/parks`);
  if (!response.ok) {
    throw new Error(`Failed to fetch parks: ${response.statusText}`);
  }
  return response.json();
};
```

#### Save Selections

```typescript
export const saveSelections = async (selections: Selections): Promise<void> => {
  const response = await fetch(`${BASE_URL}/update-selections`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(selections),
  });
  if (!response.ok) {
    throw new Error("Failed to save selections.");
  }
};
```

---

## Styling

The project uses Tailwind CSS for styling. Key configurations include:

- Custom colors for themes.
- Responsive layouts for mobile and desktop.

---

## Testing

Frontend tests are located in `frontend/tests/` and use the following tools:

- **Jest**: For unit tests.
- **React Testing Library**: For testing React components.

Run tests with:

```bash
npm run test
```

---

## Deployment

1. Build the frontend:

   ```bash
   npm run build
   ```

2. Serve the production build:

   ```bash
   npm install -g serve
   serve -s dist
   ```

The production build can then be hosted on any static server or integrated with the Raspberry Pi Display system.

---

## Future Enhancements

- Improve responsiveness for smaller screens.
- Add advanced animations for the Display.
- Support for internationalization (i18n).
- Modular widget customization for the Dashboard.
