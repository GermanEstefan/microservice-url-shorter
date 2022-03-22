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
exports.getUrlShorted = exports.saveUrlShorted = void 0;
const autoIncrementField_1 = require("../helpers/autoIncrementField");
const Url_1 = require("../models/Url");
const saveUrlShorted = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    //Verificamos que la URL sea valida
    console.log(req.body);
    const isValidUrl = /^https?:\/\/\w/gi.test(url);
    if (!isValidUrl)
        return res.json({ error: 'Invalid URL' });
    //Verificamos si existe o no almacenada en la BD
    const urlExist = yield Url_1.UrlModel.findOne({ original_url: url }).select({ _id: 0, __v: 0 });
    if (urlExist)
        return res.json(urlExist);
    //Guardamos la URL en la BD
    const urlSave = new Url_1.UrlModel({ original_url: url, short_url: yield (0, autoIncrementField_1.autoIncrementField)(Url_1.UrlModel, 'short_url') });
    yield urlSave.save();
    const { original_url, short_url } = urlSave;
    return res.status(200).json({
        original_url,
        short_url
    });
});
exports.saveUrlShorted = saveUrlShorted;
const getUrlShorted = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { urlShorted } = req.params;
    if (!Number(urlShorted))
        return res.json({ error: "Wrong format" });
    const existURL = yield Url_1.UrlModel.findOne({ short_url: urlShorted });
    if (!existURL) {
        return res.json({ error: "No short URL found for the given input" });
    }
    const { original_url } = existURL;
    return res.redirect(original_url);
});
exports.getUrlShorted = getUrlShorted;
