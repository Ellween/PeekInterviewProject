import { Analytics } from "../enums/AnalyticsEnum";
import { ISpeech } from "../interfaces/ISpeech";

// Finds the speaker who made the most speeches in 2013.
export const mostSpeeches2013 = (records: ISpeech[]): string | null => {
    const speechCounts = records.reduce<Record<string, number>>((counts, record) => {
        if (record.Date.startsWith('2013')) {
            counts[record.Speaker] = (counts[record.Speaker] || 0) + 1;
        }
        return counts;
    }, {});

    // Check if speechCounts is empty
    if (Object.keys(speechCounts).length === 0) {
        return null;
    }

    return Object.keys(speechCounts).reduce((a, b) => speechCounts[a] > speechCounts[b] ? a : b);
}

// Identifies the speaker who gave the most speeches on the topic of internal security.
export const mostSpeechesOnInternalSecurity = (records: ISpeech[]): string | null => {
    const speechCounts = records.filter(record => record.Topic === Analytics.INTERNAL_SECURITY)
                                .reduce<Record<string, number>>((counts, record) => {
                                    counts[record.Speaker] = (counts[record.Speaker] || 0) + 1;
                                    return counts;
                                }, {})

     // Check if there are any speeches on the topic
     if (Object.keys(speechCounts).length === 0) {
        return null;
    }

    return Object.keys(speechCounts).reduce((a, b) => speechCounts[a] > speechCounts[b] ? a : b);
}

// Determines the speaker who used the fewest words across all speeches.
export const fewestWordsUsed = (records: ISpeech[]): string | null => {
    const wordCounts = records.reduce<Record<string, number>>((counts, record) => {
        counts[record.Speaker] = (counts[record.Speaker] || 0) + record.Words;
        return counts;
    }, {});

    if (Object.keys(wordCounts).length === 0) {
        return null;
    }

    return Object.keys(wordCounts).reduce((a, b) => wordCounts[a] < wordCounts[b] ? a : b);
}

