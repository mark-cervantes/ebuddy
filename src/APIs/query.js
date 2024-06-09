const {db} = require('../../firebase.js');
const {where, query, limit, getFirestore, collection, getDocs} = require('firebase-admin/firestore');

/**
 *
 * @param {Object.<string, string> & questionsCollectionsIDs} questionCollectionID - the collection ID of the questions
 * @returns Promise<QuerySnapshot<AppModelType, DbModelType>>
 */
async function queryQuestions({
	questionCollectionID,
	numberOfQuestions,
	topic
}) {
	let questionsRef = collection(db, questionCollectionID)
	let q = query(questionsRef)

	if (numberOfQuestions) {
		q = query(q, limit(numberOfQuestions))
	}
	if (topic) {
		q = query(q, where('topic', '==', topic))
	}

	const questionsSnapshot = await getDocs(q)
	return questionsSnapshot.docs.map(doc => ({ ...(doc.data()), id: doc.id }))
}

/**
 * di pa gumagana
 * @param optionID
 * @returns Promise<QuerySnapshot<AppModelType, DbModelType>>
 */
async function queryOptions({collectionID, documentID, optionID}) {
	const optionsSnapshot = await getDocs(collection(db, collectionID, documentID, optionID));
	return optionsSnapshot.docs.map(optionSnapshot => optionSnapshot.data())
}

async function queryDocumentIDs({collectionID}) {
	const questionsSnapshot = await getDocs(collection(db, collectionID))
	return questionsSnapshot.docs.map(doc => doc.data())
}

module.exports = {queryQuestions, queryOptions, queryDocumentIDs}