from bs4 import BeautifulSoup
import requests
import re
import json
import time


class Index:
    def __init__(self, url):
        self.url = url

    def makeIndex(self):
        res = requests.get(self.url)
        soup = BeautifulSoup(res.text, "html.parser")
        title = soup.title.string
        body = self.replaceSpace(soup.find("body").getText())

        # get icon
        icon = soup.find("link", rel="shortcut icon").get("href")
        time.sleep(2)
        self.saveIndexToJSON(icon, title, self.url, title, body)

    def replaceSpace(self, text):
        return re.sub(r"\n+", "\n", text)

    def saveIndexToJSON(self, logoUrl, website, url, title, description):
        data = {
            logoUrl: logoUrl,
            "website": website,
            "url": url,
            "title": title,
            "description": description,

        }
        with open(f"Index/index.json", "w") as f:
            json.dump(data, f)


# Index("http://127.0.0.1:5500/3.blog-static/index.html").makeIndex()
