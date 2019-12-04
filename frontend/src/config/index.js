var firebase = require('firebase/app');
require('firebase/firestore');
require('firebase/database');

var config = {
  apiKey: 'AIzaSyBIYrzhuHpo-BQ6j1_95dCftjg2bV5KnKs',
  authDomain: 'dht11-5a0f1.firebaseapp.com',
  databaseURL: 'https://dht11-5a0f1.firebaseio.com',
  projectId: 'dht11-5a0f1',
  storageBucket: 'dht11-5a0f1.appspot.com',
  messagingSenderId: '642447741725'
};

firebase.initializeApp(config);

module.exports = firebase;
