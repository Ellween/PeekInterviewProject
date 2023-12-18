import csvParser from 'csv-parser';
import { ISpeech } from '../interfaces/ISpeech';

//  Parses a CSV data stream and converts it into an array of ISpeech objects.
export const parseCsv = (data: NodeJS.ReadableStream): Promise<ISpeech[]> => {
    return new Promise((resolve, reject) => {
        const records: ISpeech[] = [];
        data
            .pipe(csvParser({
                mapHeaders: ({ header }) => header.trim(),
                mapValues: ({ value }) => value.trim()
            }))
            .on('data', (data: ISpeech) => records.push(data))
            .on('end', () => resolve(records))
            .on('error', (error) => reject(new Error(`CSV parsing failed: ${error.message}`)));
    });
};