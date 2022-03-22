"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlModel = void 0;
const mongoose_1 = require("mongoose");
const urlSchema = new mongoose_1.Schema({
    original_url: {
        type: String,
        unique: true,
        required: true,
    },
    short_url: {
        type: Number,
        unique: true,
        required: true
    }
});
exports.UrlModel = (0, mongoose_1.model)('Url', urlSchema);
