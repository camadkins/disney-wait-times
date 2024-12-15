import unittest
import json
from app import app

class TestSelections(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        self.client.testing = True

    def test_save_selections(self):
        data = {
            "parks": {1: True, 2: False},
            "rides": {1: True, 2: False, 3: True}
        }
        response = self.client.post("/save-selections", json=data)
        self.assertEqual(response.status_code, 200)
        self.assertIn("message", response.json)
        self.assertEqual(response.json["message"], "Selections saved successfully")

    def test_fetch_selections(self):
        response = self.client.get("/fetch-selections")
        self.assertEqual(response.status_code, 200)
        self.assertIn("parks", response.json)
        self.assertIn("rides", response.json)

if __name__ == "__main__":
    unittest.main()
