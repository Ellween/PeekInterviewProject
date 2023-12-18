"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fewestWordsUsed = exports.mostSpeechesOnInternalSecurity = exports.mostSpeeches2013 = void 0;
const AnalyticsEnum_1 = require("../enums/AnalyticsEnum");
// Finds the speaker who made the most speeches in 2013.
const mostSpeeches2013 = (records) => {
    const speechCounts = records.reduce((counts, record) => {
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
};
exports.mostSpeeches2013 = mostSpeeches2013;
// Identifies the speaker who gave the most speeches on the topic of internal security.
const mostSpeechesOnInternalSecurity = (records) => {
    const speechCounts = records.filter(record => record.Topic === AnalyticsEnum_1.Analytics.INTERNAL_SECURITY)
        .reduce((counts, record) => {
        counts[record.Speaker] = (counts[record.Speaker] || 0) + 1;
        return counts;
    }, {});
    // Check if there are any speeches on the topic
    if (Object.keys(speechCounts).length === 0) {
        return null;
    }
    return Object.keys(speechCounts).reduce((a, b) => speechCounts[a] > speechCounts[b] ? a : b);
};
exports.mostSpeechesOnInternalSecurity = mostSpeechesOnInternalSecurity;
// Determines the speaker who used the fewest words across all speeches.
const fewestWordsUsed = (records) => {
    const wordCounts = records.reduce((counts, record) => {
        counts[record.Speaker] = (counts[record.Speaker] || 0) + record.Words;
        return counts;
    }, {});
    if (Object.keys(wordCounts).length === 0) {
        return null;
    }
    return Object.keys(wordCounts).reduce((a, b) => wordCounts[a] < wordCounts[b] ? a : b);
};
exports.fewestWordsUsed = fewestWordsUsed;
