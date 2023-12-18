import { fewestWordsUsed, mostSpeeches2013, mostSpeechesOnInternalSecurity } from '../utils/SpeechAnalyze';
import { AnalysisResult } from '../interfaces/AnalyticsResult';
import { parseCsv } from './CsvParseService';
import { downloadFileStream } from './DownloadService';

export const processAndAnalyzeSpeechData = async (urls: string[]): Promise<AnalysisResult> => {
    try {
        const allCsvData = await Promise.all(
            urls.map(async (url) => {
                const fileData = await downloadFileStream(url);
                return await parseCsv(fileData);
            })
        );

        const records = allCsvData.flat();

        const mostSpeeches = mostSpeeches2013(records);
        const mostSecurity = mostSpeechesOnInternalSecurity(records);
        const leastWordy = fewestWordsUsed(records);

        return {
            mostSpeeches,
            mostSecurity,
            leastWordy
        };
    } catch (error) {
        console.error('Error in processAndAnalyzeSpeechData:', error);
        throw error;
    }
};