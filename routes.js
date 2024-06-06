const router = require('express').Router();
const quizRouter = require('./src/quiz/quiz.routes.js');
const authRouter = require('./src/auth/auth.routes.js');
const statsRouter = require('./src/stats/stats.routes.js');

router.use('/quiz', quizRouter)
router.use('/auth', authRouter)
router.use('/stats', statsRouter)
router.use('/loopback', (req, res) => {
	console.log(JSON.stringify((req.headers)))
	res.send(JSON.stringify((req.headers)))
})

module.exports = router