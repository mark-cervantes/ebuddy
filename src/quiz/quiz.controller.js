import { queryQuestions, queryOptions } from '../APIs/query.js';
import { QUIZ_COLLECTION_IDS } from './quiz.const.js';


async function quizController(req, res) {
	try {
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

export { quizController }