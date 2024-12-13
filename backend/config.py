import os

# Configuration for the Queue-Times API
API_BASE_URL = "https://queue-times.com/parks"
DEFAULT_PARK_ID = 7  # Example: Disney Hollywood Studios

# Cache configuration
CACHE_DIR = os.path.join(os.getcwd(), "backend", "cache")
CACHE_FILENAME = "api_cache.json"

# Logging configuration
LOG_FILE = os.path.join(os.getcwd(), "backend", "logs", "backend.log")
LOG_LEVEL = "INFO"  # Options: DEBUG, INFO, WARNING, ERROR, CRITICAL

# Retry settings for API requests
MAX_RETRIES = 3
TIMEOUT = 5  # Timeout in seconds for API requests