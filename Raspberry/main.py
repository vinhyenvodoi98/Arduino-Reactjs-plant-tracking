import pyrebase
import Adafruit_DHT
import time

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

firebase = pyrebase.initialize_app(config)

db = firebase.database()

while True:
    humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
    if humidity is not None and temperature is not None:
        data = {"humidity": temperature,  "temperature": humidity}
        db.child("sensor").set(data)
        print("Temp={0:0.1f}C Humidity={1:0.1f}%".format(
            temperature, humidity))
    else:
        print("Sensor failure. Check wiring.")
    time.sleep(3)
