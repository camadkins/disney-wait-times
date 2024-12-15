# Backend Setup Documentation

This document outlines the structure, setup, and configuration of the backend system for the Interactive Raspberry Pi Display.

---

## **Overview**

The backend is responsible for:

- Fetching real-time Disney park wait times from the Queue-Times API.
- Providing API endpoints for the frontend Dashboard and Display.
- Handling persistent storage for park and ride selections.
- Logging system events and errors.

---

## **Folder Structure**

```bash
backend/
├── app.py              # Main Flask application.
├── api_handler.py      # Handles interactions with the Queue-Times API.
├── cache_handler.py    # Manages local caching of API responses.
├── logger.py           # Centralized logging utility.
├── tests/              # Unit tests for backend modules.
│   ├── test_api.py     # Tests for API fetching and error handling.
│   ├── test_cache.py   # Tests for caching functionality.
│   └── test_app.py     # Tests for Flask endpoints.
├── requirements.txt    # Python dependencies.
└── config.py           # Configuration file for environment variables.
```

---

## **Setup Instructions**

### **1. Install Python Dependencies**

1. Navigate to the `backend/` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

### **2. Environment Variables**

Create a `.env` file in the `backend/` directory to configure environment-specific settings. Example:

```env
FLASK_ENV=development
FLASK_DEBUG=1
API_BASE_URL=https://queue-times-api-url.com
CACHE_TTL=3600  # Cache Time-To-Live in seconds
```

### **3. Running the Server**

1. Start the Flask development server:

   ```bash
   python -m flask run
   ```

2. The server will be accessible at:

   ```bash
   http://127.0.0.1:5000/
   ```

---

## **Backend Modules**

### **1. `app.py`**

- Entry point for the Flask application.
- Defines API endpoints for parks, rides, and selections.

### **2. `api_handler.py`**

- Handles API requests to the Queue-Times API.
- Implements retries and error handling to ensure reliability.

### **3. `cache_handler.py`**

- Manages local caching of API responses.
- Uses the filesystem to store cached data and reduce unnecessary API calls.

### **4. `logger.py`**

- Logs system events, errors, and API call statuses.
- Supports file-based logging with configurable verbosity.

### **5. `tests/`**

- Contains unit tests for all backend modules.
- Uses `unittest` framework for testing.

---

## **Endpoints**

See [`backend_endpoints.md`](backend_endpoints.md) for detailed documentation of available endpoints.

---

## **Development Notes**

- **Error Handling**: All backend functions include robust error handling and logging to ensure reliability.
- **CORS**: Configured using Flask-CORS to support requests from the frontend hosted on a different domain.
- **Cache**: Cached data is used as a fallback in case of API failures.

---

## **Future Enhancements**

- Add support for advanced statistics and analytics endpoints.
- Integrate user authentication for secure API access.
- Expand caching functionality to support in-memory storage for faster responses.
