import pyrebase
import config

firebase = pyrebase.initialize_app(config)

db = firebase.database()

all_users = db.child("user").get()
print(all_users)

db.child("user").child("Morty")

data = {"name": "Mortimer 'Morty' Smith"}
db.child("user").child("Morty").set(data)
