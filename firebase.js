// Import the functions you need from the SDKs you need
import admin from 'firebase-admin';
import serviceAccount from './e-buddy-8c08f-firebase-adminsdk-wo5xo-14b10049be.json' assert { type: 'json' }

const app = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export { app, db };