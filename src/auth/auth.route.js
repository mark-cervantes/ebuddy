const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { signup, saveSession } = require('./auth.controller.js')
const {applySessionMiddleware, verifyToken} = require('./auth.middleware');

router.post('/saveSession', verifyToken, applySessionMiddleware, asyncHandler(saveSession))
router.post('/signup', asyncHandler(signup))

module.exports = router