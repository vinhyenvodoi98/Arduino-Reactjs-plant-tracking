import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import time
import datetime

cred = credentials.Certificate(
    "./key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

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

dt = datetime.datetime.today()
currentHour = dt.hour
currendDay = dt.day
dayrecord = str(dt.day) + '-' + str(dt.month)

data = dayData
doc_ref = db.collection(u'sensor').document(dayrecord)

while True:
    dt = datetime.datetime.today()

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

    time.sleep(3)
