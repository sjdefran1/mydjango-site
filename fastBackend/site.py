from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Union
import sqlalchemy
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

# blue: #183260, red: #bf4d40,  yellow: #f4dd57

# Database connection
db_u = 'sjdefran'
db_p = 'mysite!2345'
db_host = 'localhost'
db_name = 'FastSiteDB'
conn = sqlalchemy.create_engine(f"mariadb+mariadbconnector://{db_u}:{db_p}@{db_host}/{db_name}", echo=True)

# Database session for inserting/querying
Session = sessionmaker()
Session.configure(bind=conn)
session = Session()

# Message class for modeling inserts into Messages table
Base = declarative_base()
class Message(Base):
    __tablename__ = 'messages'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True)
    dateTime = sqlalchemy.Column(sqlalchemy.String(length=20))
    name = sqlalchemy.Column(sqlalchemy.String(length=50))
    email = sqlalchemy.Column(sqlalchemy.String(length=50))
    message = sqlalchemy.Column(sqlalchemy.String(length=255))
    
    def __init__(self, dateTime: str, name: str, email: str, message: str):
        self.dateTime = dateTime
        self.name = name
        self.email = email
        self.message = message

# Message class for incoming requests
class IncomingMessage(BaseModel):
    name: str = Field(..., example="John Smith")
    email: str = Field(..., example="john@example.com")
    message: str = Field(..., example="Hello, how are you?")


# Api initiation
# adding :3000 for react dev
# middle ware also for react post requests
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


@app.options("/messages")
def read_options():
    return {}

    
@app.post("/messages")
async def create_message(message: IncomingMessage):
    insert = Message(dateTime='',name=message.name, email=message.email, message=message.message)
    insert.dateTime = datetime.now().strftime("%m/%d/%Y  %I:%M:%S %p")
    session.add(insert)
    session.commit()
    print(message)
    return HTTPException(status_code=200)



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
