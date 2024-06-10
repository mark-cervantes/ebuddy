import { db } from '../../firebase.js';
import admin from 'firebase-admin';

/**
 * Query questions from Firestore.
 * @param {Object} options - The query options.
 * @param {string} options.questionCollectionID - The question collection ID.
 * @param {number} options.numberOfQuestions - The number of questions to query.
 * @param {string} options.topic - The topic to query.
 * @returns {Promise<(*&{id: *})[]>} A promise that resolves to the questions.
 */
async function queryQuestions({
	questionCollectionID,
	numberOfQuestions,
	topic
}) {
	let questionsRef = db.collection(questionCollectionID);
	let q = questionsRef;

	if (numberOfQuestions) {
		q = q.limit(numberOfQuestions);
	}
	if (topic) {
		q = q.where('topic', '==', topic);
	}

	const questionsSnapshot = await q.get();
	return questionsSnapshot.docs.map(doc => ({ ...(doc.data()), id: doc.id }));
}

/**
 * Query options from Firestore.
 * @param {Object} options - The query options.
 * @param {string} options.collectionID - The collection ID.
 * @param {string} options.documentID - The document ID.
 * @param {string} options.optionID - The option ID.
 * @returns {Promise<FirebaseFirestore.DocumentData[]>} A promise that resolves to the options. */
async function queryOptions({ collectionID, documentID, optionID }) {
	const optionsSnapshot = await db.collection(collectionID).doc(documentID).collection(optionID).get();
	return optionsSnapshot.docs.map(optionSnapshot => optionSnapshot.data());
}

/**
 * Query document IDs from Firestore.
 * @param {string} collectionID - The collection ID.
 * @returns {Promise<FirebaseFirestore.DocumentData[]>} A promise that resolves to the query snapshot.
 */
async function queryDocumentIDs({ collectionID }) {
	const questionsSnapshot = await db.collection(collectionID).get();
	return questionsSnapshot.docs.map(doc => doc.data());
}

export { queryQuestions, queryOptions, queryDocumentIDs };