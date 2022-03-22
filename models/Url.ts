import { Schema, model } from "mongoose";

const urlSchema = new Schema({
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

export const UrlModel = model('Url', urlSchema); 

