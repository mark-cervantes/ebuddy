// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web firebaseApp's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB5YHU4AF9a5Xn-sywnYMmA0Exe-hvNYfI",
	authDomain: "e-buddy-8c08f.firebaseapp.com",
	databaseURL: "https://e-buddy-8c08f-default-rtdb.firebaseio.com",
	projectId: "e-buddy-8c08f",
	storageBucket: "e-buddy-8c08f.appspot.com",
	messagingSenderId: "377857778256",
	appId: "1:377857778256:web:a2de0ec20ec8b1eee52755",
	measurementId: "G-55NWQWF1XL"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

module.exports = { app: firebaseApp, db };