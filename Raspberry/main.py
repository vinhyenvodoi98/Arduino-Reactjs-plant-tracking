import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import Adafruit_DHT
import time
import datetime

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4
config = {
    "apiKey": 'AIzaSyBIYrzhuHpo-BQ6j1_95dCftjg2bV5KnKs',
    "authDomain": 'dht11-5a0f1.firebaseapp.com',
    "databaseURL": 'https://dht11-5a0f1.firebaseio.com',
    "projectId": 'dht11-5a0f1',
    "storageBucket": 'dht11-5a0f1.appspot.com',
    "messagingSenderId": '642447741725',
}

# database realtime
firebase = pyrebase.initialize_app(config)

db = firebase.database()

# firestore

cred = credentials.Certificate(
    "./key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# form data for firestore
dayData = {
    "data": [
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        },
        {
            "humidity": [],
            "temperature": []
        }
    ]}

# initiall firestore
dt = datetime.datetime.today()
currentHour = dt.hour
currendDay = dt.day
dayrecord = str(dt.day) + '-' + str(dt.month)

data = dayData
doc_ref = db.collection(u'sensor').document(dayrecord)

while True:
    dt = datetime.datetime.today()
    humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
    if humidity is not None and temperature is not None:
        data = {"humidity": humidity,  "temperature": temperature}
        db.child("sensor").set(data)
        print("Temp={0:0.1f}C Humidity={1:0.1f}%".format(
            temperature, humidity))

        if currentHour != dt.hour:
            doc_ref.set(data)
            currentHour = dt.hour
        else:
            # add data to data
            data["data"][currentHour]["humidity"].append(15)
            data["data"][currentHour]["temperature"].append(15)

        if currendDay != dt.day:
            currendDay = dt.day
            doc_ref.set(data)
            # reset Data
            data = dayData
            dayrecord = str(dt.day) + '-' + str(dt.month)
            doc_ref = db.collection(u'sensor').document(dayrecord)

    else:
        print("Sensor failure. Check wiring.")
    time.sleep(3)
