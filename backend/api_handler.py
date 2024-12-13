import requests
from time import sleep
from .config import API_BASE_URL, MAX_RETRIES, TIMEOUT
from .logger import get_logger
from .cache.cache_handler import save_to_cache, load_from_cache

# Initialize the logger
logger = get_logger(__name__)

def fetch_data(park_id):
    """
    Fetches queue time data for a specified park.
    Uses caching if the API fails.
    """
    url = f"{API_BASE_URL}/{park_id}/queue_times.json"
    retries = 0

    while retries < MAX_RETRIES:
        try:
            logger.info(f"Fetching data for park ID {park_id} (Attempt {retries + 1})...")
            response = requests.get(url, timeout=TIMEOUT)
            response.raise_for_status()  # Raise HTTPError for bad responses

            data = response.json()
            save_to_cache(data)  # Save successful response to cache
            logger.info(f"Data fetched successfully for park ID {park_id}.")
            return data
        except requests.exceptions.RequestException as e:
            logger.warning(f"Error fetching data: {e}")
            retries += 1
            sleep(2)  # Wait 2 seconds before retrying

    # Load data from cache if API requests fail
    logger.error(f"Max retries reached for park ID {park_id}. Loading from cache.")
    return load_from_cache()

def health_check():
    """
    Checks if the API is reachable and responding.
    """
    try:
        logger.info("Performing health check on the API...")
        response = requests.get(API_BASE_URL, timeout=TIMEOUT)
        response.raise_for_status()
        logger.info("Health check passed. API is reachable.")
        return True
    except requests.exceptions.RequestException as e:
        logger.error(f"Health check failed: {e}")
        return False


if __name__ == "__main__":
    # Example usage
    if fetch_data(7):
        logger.info("Data fetched successfully.")
    else:
        logger.error("Failed to fetch data and no cache available.")