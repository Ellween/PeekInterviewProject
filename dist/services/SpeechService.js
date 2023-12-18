"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processAndAnalyzeSpeechData = void 0;
const SpeechAnalyze_1 = require("../utils/SpeechAnalyze");
const CsvParseService_1 = require("./CsvParseService");
const DownloadService_1 = require("./DownloadService");
const processAndAnalyzeSpeechData = (urls) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCsvData = yield Promise.all(urls.map((url) => __awaiter(void 0, void 0, void 0, function* () {
            const fileData = yield (0, DownloadService_1.downloadFileStream)(url);
            return yield (0, CsvParseService_1.parseCsv)(fileData);
        })));
        const records = allCsvData.flat();
        const mostSpeeches = (0, SpeechAnalyze_1.mostSpeeches2013)(records);
        const mostSecurity = (0, SpeechAnalyze_1.mostSpeechesOnInternalSecurity)(records);
        const leastWordy = (0, SpeechAnalyze_1.fewestWordsUsed)(records);
        return {
            mostSpeeches,
            mostSecurity,
            leastWordy
        };
    }
    catch (error) {
        console.error('Error in processAndAnalyzeSpeechData:', error);
        throw error;
    }
});
exports.processAndAnalyzeSpeechData = processAndAnalyzeSpeechData;
