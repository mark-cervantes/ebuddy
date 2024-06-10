import { applySessionMiddleware, verifyToken } from '../auth/auth.middleware.js';
import { Router } from 'express';
import { setStatsController } from './stats.controller.js';

const router = Router();

// router.use('/', verifyToken, applySessionMiddleware)
router.use('/', verifyToken, applySessionMiddleware)
router.patch('/user', () => {})
router.get('/user', () => setStatsController)
router.post('/attempt', () => { throw 'not yet implemented' })

export default router