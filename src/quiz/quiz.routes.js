const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const {
	quizController
} = require('./quiz.controller.js');

router.get('/:subjectID', asyncHandler(quizController));

module.exports = router
