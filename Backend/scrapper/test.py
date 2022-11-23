import unittest
import os
import scrapper as sc
DEVELOPER_KEY = os.environ.get("DEVELOPER_KEY")

class ARE_ENV_LOADED(unittest.TestCase):
    def test_env_loaded(self):
        self.assertIsNotNone(DEVELOPER_KEY)


class ARE_SCRAPED_COMMENTS_PARSABLE(unittest.TestCase):
    def test_comments_parsable(self):
        comments = sc.get("https://www.youtube.com/watch?v=9bZkp7q19f0")
        print(len(comments))
        self.assertGreater(len(comments), 0)

if __name__ == '__main__':
    unittest.main()