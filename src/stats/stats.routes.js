const {applySessionMiddleware, verifyToken} = require('../auth/auth.middleware');
const router = require('express').Router();

// router.use('/', verifyToken, applySessionMiddleware)
router.patch('/', () => { throw 'not implemented' })
router.get('/', () => { throw 'not implemented' })
router.patch('/attempt', () => { throw 'not yet implemented' })

module.exports = router