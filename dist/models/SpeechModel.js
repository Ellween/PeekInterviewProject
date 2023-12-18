"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const speechSchema = new mongoose_1.default.Schema({
    speaker: String,
    topic: String,
    date: Date,
    words: Number
});
exports.SpeechModel = mongoose_1.default.model('Speech', speechSchema);
