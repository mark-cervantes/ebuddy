import { applySessionMiddleware, verifyToken } from '../auth/auth.middleware.js';
import { Router } from 'express';
import { getStatsController, setStatsController } from './stats.controller.js';

const router = Router();

// router.use('/', verifyToken, applySessionMiddleware)
router.use('/', verifyToken)
router.patch('/user', () => {})
router.get('/user', () => getStatsC
ontroller)
router.post('/attempt', () => { throw 'not yet implemented' })

export default router