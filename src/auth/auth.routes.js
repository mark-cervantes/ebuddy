const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { login, signup } = require('./auth.controller.js')

router.post('/login', asyncHandler(login))
router.post('/signup', asyncHandler(signup))

module.exports = router