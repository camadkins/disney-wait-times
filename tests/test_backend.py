import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from backend.api_handler import fetch_data, health_check
from backend.cache.cache_handler import save_to_cache, load_from_cache

import unittest

class TestBackend(unittest.TestCase):
    def test_health_check(self):
        self.assertTrue(health_check(), "API health check should pass.")

    def test_fetch_data(self):
        data = fetch_data(7)  # Example park ID
        self.assertIsNotNone(data, "Fetch data should return a valid response.")

    def test_cache(self):
        sample_data = {"test": "This is sample data"}
        save_to_cache(sample_data)
        cached_data = load_from_cache()
        self.assertEqual(cached_data, sample_data, "Cached data should match saved data.")

if __name__ == "__main__":
    unittest.main()
