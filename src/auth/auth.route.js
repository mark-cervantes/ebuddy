import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { saveSession } from './auth.controller.js';
import { applySessionMiddleware, verifyToken } from './auth.middleware.js';

const router = Router();

router.post('/saveSession', verifyToken, applySessionMiddleware, asyncHandler(saveSession));

export default router;
