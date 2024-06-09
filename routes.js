const router = require('express').Router();
const quizRouter = require('./src/quiz/quiz.routes.js');
const authRouter = require('./src/auth/auth.route.js');
const statsRouter = require('./src/stats/stats.routes.js');


router.get('/connection-test', (req, res) => {
	res.send('<h1> connection to E-buddy working! </h1>')
})
router.use('/auth', authRouter)
router.use('/quiz', quizRouter)
router.use('/stats', statsRouter)
router.get('/loopback', (req, res) => {
	console.debug(JSON.stringify((req.headers)))
	res.send(
		`
		<h2>Headers:</h2> <p>${JSON.stringify(req.headers)}</p>
		<h2>Body:</h2> <p>${JSON.stringify(req.body, Object.getOwnPropertyNames(req.body))}</p>
		`
	)
})

module.exports = router