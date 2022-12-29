
import sqlalchemy
from datetime import datetime
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

db_u = 'sjdefran'
db_p = 'mysite!2345'
db_host = 'localhost'
db_name = 'FastSiteDB'
conn = create_engine(f"mariadb+mariadbconnector://{db_u}:{db_p}@{db_host}/{db_name}", echo=True)

Base = declarative_base()

class Message(Base):
    __tablename__ = 'messages'
    id = Column(Integer, primary_key=True)
    dateTime = Column(String(length=55))
    name = Column(String(length=50))
    email = Column(String(length=50))
    message = Column(String(length=255))

Base.metadata.create_all(conn, checkfirst=True)