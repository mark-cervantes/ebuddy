const {applySessionMiddleware, verifyToken} = require('../auth/auth.middleware');
const router = require('express').Router();

// router.use('/', verifyToken, applySessionMiddleware)
router.use('/', verifyToken, applySessionMiddleware)
router.patch('/user', () => { throw 'not implemented' })
router.get('/user', () => { throw 'not implemented' })
router.post('/attempt', () => { throw 'not yet implemented' })

module.exports = router