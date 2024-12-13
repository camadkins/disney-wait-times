# Backend Setup and Architecture

## Overview

The backend handles:

1. Fetching data from the Queue-Times API.
2. Parsing and formatting the data.
3. Logging system events.
4. Caching data locally for reliability.

## Folder Structure

``` bash

backend/
├── **init**.py          # Marks backend as a package
├── api_handler.py       # Handles API requests
├── config.py            # Stores environment-specific settings
├── data_parser.py       # (To be implemented) Parses and formats API data
├── logger.py            # Manages logging
├── cache/               # Handles caching logic
│   ├── **init**.py
│   └── cache_handler.py
├── logs/                # Stores backend logs
│   └── backend.log

```

## Modules

### 1. `api_handler.py`

- Fetches data from the Queue-Times API.
- Implements retry logic.
- Saves successful API responses to the cache.
- Loads cached data if API requests fail.

### 2. `config.py`

- Stores environment-specific settings such as:
  - API Base URL
  - Cache paths
  - Log file paths
  - Retry settings

### 3. `logger.py`

- Configures and manages logging.
- Logs messages with different levels (INFO, DEBUG, WARNING, ERROR).

### 4. `cache/cache_handler.py`

- Saves and loads API responses to/from a JSON cache file.
- Ensures cached data is used if API fails.

## Testing

Run tests using:

```bash
python -m unittest discover tests
```

Unit tests are located in the `tests/` directory.

## Backend Development Notes

## Running Python Backend Modules

### Import Issue Fix

When running backend modules directly, use the `-m` flag to resolve `ModuleNotFoundError`. This ensures Python correctly resolves relative imports.

#### Example

```bash
python -m backend.api_handler
```

Avoid running scripts directly like python backend/api_handler.py as it may fail due to Python's import mechanics.
