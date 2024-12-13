import requests

# Constants
BASE_URL = "https://queue-times.com/parks"
PARK_ID = 7  # Disney Hollywood Studios (example)

def fetch_queue_times(park_id):
    url = f"{BASE_URL}/{park_id}/queue_times.json"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad HTTP status codes
        data = response.json()
        print(f"Fetched data for park ID {park_id}:")
        print(data)
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    fetch_queue_times(PARK_ID)