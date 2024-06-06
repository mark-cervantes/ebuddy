const {db} = require('../../firebase.js');
const {getFirestore, collection, getDocs} = require('firebase/firestore');
const {queryQuestions, queryOptions} = require('../APIs/query');
const {QUIZ_COLLECTION_IDS} = require('./quiz.const');

async function quizController(req, res) {
	try {
		const {queryQuestions, queryOptions} = require('../APIs/query.js');
		const {QUIZ_COLLECTION_IDS} = require('./quiz.const.js');
		const subjectID = req.params['subjectID'];

		if (subjectID in QUIZ_COLLECTION_IDS) {
			const questionCollectionID = req.params['subjectID'];
			console.log(`questionCollectionID: ${questionCollectionID}`)
			const questions = await queryQuestions({
				questionCollectionID: QUIZ_COLLECTION_IDS[questionCollectionID],
				numberOfQuestions: parseInt(req?.query?.numberOfQuestions),
				topic: req?.query?.topic
			});
			const addOptionsPromises = []
			for (const question of questions) {
				const addOptionPromise = new Promise(async (resolve, reject) => {
					try {
						const optionsObj = (await queryOptions({
							collectionID: QUIZ_COLLECTION_IDS[questionCollectionID],
							documentID: question.id,
							optionID: 'Options'
						}))[0]
						if (!optionsObj) {
							console.log(`undefined/null options for question: ${JSON.stringify(question)}`)
							resolve({})
						}

						resolve({
							...question,
							options: Object.values(optionsObj)
						});
					} catch (error) {
						reject(error)
					}

				})
				addOptionsPromises.push(addOptionPromise)
			}
			const questionsWithOptions = await Promise.all(addOptionsPromises)
			res.send(questionsWithOptions)
		} else {
			res.status(404).send('Invalid subject ID');
		}
	} catch (error) {
		console.log(JSON.stringify(error, Object.getOwnPropertyNames(error)))
		res.status(500).send('Internal server error');
	}
}

module.exports = {quizController}