from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI()
origins = [
    "http://localhost:3000/",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Message(BaseModel):
    name: str = Field(..., example="John Smith")
    email: str = Field(..., example="john@example.com")
    message: str = Field(..., example="Hello, how are you?")

@app.options("/messages")
def read_options():
    return {}

    
@app.post("/messages")
async def create_message(message: Message):
    print(message)
    return HTTPException(status_code=200)



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)