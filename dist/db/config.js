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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.DBURI) {
            throw new Error('db uri not is provider');
        }
        yield mongoose_1.default.connect(process.env.DBURI);
        return 'Db is running';
    }
    catch (error) {
        throw new Error('Error to connect to DB, error:\n' + error);
    }
});
exports.connectToDB = connectToDB;
