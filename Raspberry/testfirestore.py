import pyrebase
config = {
    "apiKey": 'AIzaSyBIYrzhuHpo-BQ6j1_95dCftjg2bV5KnKs',
    "authDomain": 'dht11-5a0f1.firebaseapp.com',
    "databaseURL": 'https://dht11-5a0f1.firebaseio.com',
    "projectId": 'dht11-5a0f1',
    "storageBucket": 'dht11-5a0f1.appspot.com',
    "messagingSenderId": '642447741725',
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()

data = {"humidity": "15",  "temperature": "25"}
db.child("sensor").set(data)
