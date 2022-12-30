from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Union
from datetime import datetime
from deta import Deta
import os
import smtplib
from email.message import EmailMessage


# Deta DB
deta = Deta("b0buqoka_xC5mfwCRbcMfQWrYRVYfdf8yBZQAaRhf")
db = deta.Base("Messages")
email = os.getenv('EMAIL')
email_pass = os.getenv('EMAIL_PASS')
msg_to = os.getenv('MESSAGE_TO')

class MessageDB():
    name: str
    email: str
    message: str
    dateTime: str
    def __init__(self, name: str, email: str, message: str, dateTime: str) -> None:
        self.name = name
        self.email = email
        self.message = message
        self.dateTime = dateTime
    
    # returns dictionary for put()
    def toDict(self) -> dict:
        ret = {
            "dateTime": self.dateTime,
            "name": self.name,
            "email": self.email,
            "message": self.message
        }
        return ret
    
    def __str__(self) -> str:
        return f'{self.dateTime}\n({self.name}, {self.email})\n\nMessage: {self.message}'

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


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.options("/messages")
def read_options():
    return {}

    
@app.post("/messages")
async def create_message(message: IncomingMessage):
    insert = MessageDB(dateTime='',name=message.name, email=message.email, message=message.message)
    insert.dateTime = datetime.now().strftime("%m/%d/%Y  %I:%M:%S %p")
    db.put(insert.toDict())
    msg = EmailMessage()
    msg.set_content(str(insert))
    msg['From'] = email
    msg['To'] = msg_to
    print(msg)
    try:
        #send emails code 
        server_ssl = smtplib.SMTP_SSL(host = 'smtp.gmail.com', port = 465)
        server_ssl.login(email, email_pass)
        server_ssl.send_message(msg)
        server_ssl.quit()
    except Exception as e:
        print(e)

    return HTTPException(status_code=200)




if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
