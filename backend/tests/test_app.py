import unittest
import sys
import os

# Add the backend directory to the Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app  # Import your Flask app

class TestApp(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        self.client.testing = True

    def test_parks_endpoint(self):
        response = self.client.get('/parks')
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json, list)
        self.assertGreater(len(response.json), 0)
        self.assertIn('id', response.json[0])
        self.assertIn('name', response.json[0])

    def test_rides_endpoint_valid(self):
        response = self.client.get('/rides/1')
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json, list)
        if len(response.json) > 0:
            self.assertIn('id', response.json[0])
            self.assertIn('name', response.json[0])
            self.assertIn('wait_time', response.json[0])
            self.assertIn('is_open', response.json[0])

    def test_rides_endpoint_invalid(self):
        response = self.client.get('/rides/9999')  # Invalid park_id
        self.assertEqual(response.status_code, 404)

if __name__ == '__main__':
    unittest.main()