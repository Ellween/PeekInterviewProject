"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCsv = void 0;
const csv_parser_1 = __importDefault(require("csv-parser"));
//  Parses a CSV data stream and converts it into an array of ISpeech objects.
const parseCsv = (data) => {
    return new Promise((resolve, reject) => {
        const records = [];
        data
            .pipe((0, csv_parser_1.default)({
            mapHeaders: ({ header }) => header.trim(),
            mapValues: ({ value }) => value.trim()
        }))
            .on('data', (data) => records.push(data))
            .on('end', () => resolve(records))
            .on('error', (error) => reject(new Error(`CSV parsing failed: ${error.message}`)));
    });
};
exports.parseCsv = parseCsv;
