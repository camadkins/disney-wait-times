import requests

BASE_URL = "http://localhost:5000"

def test_parks_endpoint():
    response = requests.get(f"{BASE_URL}/parks")
    print("Parks Endpoint Test")
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")

def test_rides_endpoint():
    park_id = 1  # Specify a valid park_id
    response = requests.get(f"{BASE_URL}/rides/{park_id}")
    print("Rides Endpoint Test")
    print(f"Status Code: {response.status_code}")
    if response.status_code == 200:
        print(f"Response: {response.json()}")
    else:
        print("Failed to fetch rides.")


if __name__ == "__main__":
    test_parks_endpoint()
    test_rides_endpoint()
