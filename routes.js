import express from 'express';
import quizRouter from './src/quiz/quiz.routes.js';
import authRouter from './src/auth/auth.route.js';
import statsRouter from './src/stats/stats.routes.js';
const router = express.Router();


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

export default router