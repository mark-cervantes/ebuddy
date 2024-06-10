import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { quizController } from './quiz.controller.js';

const router = Router();

router.get('/:subjectID', asyncHandler(quizController));

export default router;
