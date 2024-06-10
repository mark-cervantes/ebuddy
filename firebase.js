// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const admin = require('firebase-admin');
const serviceAccount = require('./e-buddy-8c08f-firebase-adminsdk-wo5xo-14b10049be.json');

const app = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { app, db };