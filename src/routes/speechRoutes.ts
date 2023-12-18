import express from 'express';
import { analyzeSpeechData } from '../controllers/SpeechController';

const router = express.Router();

router.post('/evaluation', analyzeSpeechData);

export default router;
