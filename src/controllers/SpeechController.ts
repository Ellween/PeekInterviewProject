import { Request, Response } from 'express';
import { processAndAnalyzeSpeechData } from '../services/SpeechService';

/*
    Controller function to handle the route for analyzing speech data.
    It extracts URLs from the request query, processes, and analyzes the speech data,
    then sends the analysis result as a response.    
*/
export const analyzeSpeechData = async (req: Request, res: Response): Promise<void> => {
    try {
        const urlEntries = Object.entries(req.query);
        const urls = urlEntries.map(([, value]) => value as string);

        const analysisResult = await processAndAnalyzeSpeechData(urls);

        res.json(analysisResult);
    } catch (error) {
        res.status(500).send("Internal Server Error: " + error);
    }
};
