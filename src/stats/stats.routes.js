const {applySessionMiddleware, verifyToken} = require('../auth/auth.middleware');
const router = require('express').Router();
const {setStatController: setStatsController} = require('./stats.controller');

// router.use('/', verifyToken, applySessionMiddleware)
router.use('/', verifyToken, applySessionMiddleware)
router.patch('/user', () => {})
router.get('/user', () => setStatsController)
router.post('/attempt', () => { throw 'not yet implemented' })

module.exports = router