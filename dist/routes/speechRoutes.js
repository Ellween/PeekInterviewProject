"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SpeechController_1 = require("../controllers/SpeechController");
const router = express_1.default.Router();
router.post('/evaluation', SpeechController_1.analyzeSpeechData);
exports.default = router;
