"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./db/config");
const urlShorted_1 = require("./controllers/urlShorted");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//Global consts
const PORT = process.env.PORT || 3000;
//Up express server
const expressApp = (0, express_1.default)();
//Connection DB
(0, config_1.connectToDB)().then(resp => console.log(resp)).catch(err => console.log(err));
//Middlewares
expressApp.use((0, cors_1.default)());
expressApp.use(express_1.default.json());
expressApp.use(express_1.default.static('public'));
//Endpoints
expressApp.post('/api/shorturl', urlShorted_1.saveUrlShorted);
expressApp.get('/api/shorturl/:urlShorted', urlShorted_1.getUrlShorted);
//Listen requests...
expressApp.listen(PORT, () => console.log('Server is running in the port', PORT));
