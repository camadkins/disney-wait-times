# Change Log

## [2024-12-13] - Block 1 Completion

### B1 - Added

- Initialized project folder structure.
- Created and updated `README.md` with project details and structure.
- Created and added `LICENSE.md` with MIT License.
- Developed and tested `fetch_queue_times.py` to fetch data from Queue-Times API.
- Installed necessary dependencies (`requests`).

### B1 - Fixed

- Resolved PATH issues for Python and pip configuration.
- Addressed markdown formatting issues in `README.md`.

---

## [2024-12-13] - Block 2 Completion

### B2 - Added

- Added `api_handler.py` to handle API fetching with retries and error handling.
- Implemented `cache_handler.py` for local caching of API responses.
- Created centralized logging system with `logger.py` to log system events.
- Documented backend architecture in `docs/backend_setup.md`.
- Wrote and successfully tested unit tests for:
  - Fetching data from the API.
  - API health checks.
  - Cache save and load functionality.

---

## [2024-12-14] - Block 3 Completion

### B3 - Added

- Implemented frontend structure with React and TypeScript using Vite.
- Created navigation and sidebar for the Control Panel dashboard.
- Developed the Parks & Rides page with mock data integration and selection controls.
- Designed UI with TailwindCSS for consistent theming and styling.
- Added checkboxes for park and ride selection.

### B3 - Fixed

- Resolved file casing issues causing import errors in the project.
- Updated mock data handling to avoid conflicts with TypeScript typing.

### B3 - Notes

- Current data for parks and rides is mocked until backend integration is completed.
- Persisting user configurations is planned for a future block.

---

## [2024-12-15] - Block 4 In Progress

### B4 - Added

- Integration between Dashboard and Display, ensuring settings are applied seamlessly.
- Full implementation of Parks & Rides functionality:
  - Park and ride selection toggles.
  - Persistent backend storage of selections.
  - Real-time updates from Control Panel to Display.
- Basic Display page functionality:
  - Placeholder loading animations.
  - Displays selected parks, rides, and themes based on Control Panel settings.
- Error handling improvements for backend requests.

### B4 - Fixed

- Issue with overlapping `<Router>` elements causing app crash.
- Backend API alignment for parks and rides endpoints.
- Checkbox desynchronization issue when deselecting parks or rides.

### B4 - Planned

- Raspberry Pi boot sequence integration:
  - Custom program to launch the Display page automatically in fullscreen.
  - Admin controls for restarting Display from the Control Panel.
- Constellation-themed loading animation for the Display.
- Expansion of Control Panel System Management options.

---

## [2024-12-17] - Project Archived

### Archived Status

- The project is no longer actively maintained and is archived as of this release.
- Further development, updates, and support are discontinued.

### Known Issues

- Persistent selections for parks and rides reset after backend restarts.
- `api_cache.json` not updating real-time wait times.
- Incomplete features:
  - Preview components for themes and backgrounds in the Dashboard.
  - Loading animation for the Display.

### Notes

- All implemented functionality is preserved for future use or inspiration.
- Documentation reflects the current state of the project and archive status.
