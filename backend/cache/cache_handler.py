import json
import os
from backend.config import CACHE_DIR, CACHE_FILENAME
from backend.logger import get_logger

# Initialize the logger
logger = get_logger(__name__)

def save_to_cache(data):
    """
    Saves API response data to a cache file.
    """
    os.makedirs(CACHE_DIR, exist_ok=True)  # Ensure cache directory exists
    cache_path = os.path.join(CACHE_DIR, CACHE_FILENAME)

    try:
        with open(cache_path, "w") as cache_file:
            json.dump(data, cache_file)
        logger.info("Data saved to cache successfully.")
    except Exception as e:
        logger.error(f"Failed to save data to cache: {e}")

def load_from_cache():
    """
    Loads API response data from the cache file.
    """
    cache_path = os.path.join(CACHE_DIR, CACHE_FILENAME)

    if not os.path.exists(cache_path):
        logger.warning("Cache file does not exist.")
        return None

    try:
        with open(cache_path, "r") as cache_file:
            data = json.load(cache_file)
        logger.info("Data loaded from cache successfully.")
        return data
    except Exception as e:
        logger.error(f"Failed to load data from cache: {e}")
        return None

if __name__ == "__main__":
    # Example usage
    sample_data = {"example": "This is sample cached data."}
    save_to_cache(sample_data)
    cached_data = load_from_cache()
    logger.debug(f"Cached data: {cached_data}")
