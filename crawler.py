from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from API.Index import Index
import uvicorn

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])


@app.post("/index")
async def makeIndex(item: dict):
    url = item.get("url")
    print(url)
    Index(url).makeIndex()
    return {"result": "success"}


if __name__ == "__main__":
    uvicorn.run("crawler:app", host="127.0.0.1", port=4000, reload=True)
