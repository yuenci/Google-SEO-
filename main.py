from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from API.ReadArticles import get_articles
import uvicorn

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])


@app.get("/articles")
def get_lastest_articles():
    articles = get_articles()
    res = {}
    for i in range(4):
        res[i] = {"title": articles[i][0], "content": articles[i][1]}

    return res


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=5000, reload=True)
