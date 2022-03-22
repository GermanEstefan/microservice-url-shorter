import { Request, Response } from "express";
import { autoIncrementField } from "../helpers/autoIncrementField";
import { UrlModel } from "../models/Url";

export const saveUrlShorted = async (req: Request, res: Response) => {

    const { url } = req.body;
    //Verificamos que la URL sea valida
    console.log(req.body)
    const isValidUrl = /^https?:\/\/\w/gi.test(url);
    if (!isValidUrl) return res.json({ error: 'Invalid URL' });

    //Verificamos si existe o no almacenada en la BD
    const urlExist = await UrlModel.findOne({ original_url: url }).select({ _id: 0, __v: 0 });
    if (urlExist) return res.json(urlExist);

    //Guardamos la URL en la BD
    const urlSave = new UrlModel({ original_url: url, short_url: await autoIncrementField(UrlModel, 'short_url') });
    await urlSave.save();
    const { original_url, short_url } = urlSave;

    return res.status(200).json({
        original_url,
        short_url
    });
};

export const getUrlShorted = async (req: Request, res: Response) => {

    const { urlShorted } = req.params;

    if (!Number(urlShorted)) return res.json({ error: "Wrong format" });

    const existURL = await UrlModel.findOne({ short_url: urlShorted });
    if (!existURL) {
        return res.json({ error: "No short URL found for the given input" });
    }

    const { original_url } = existURL;

    return res.redirect(original_url);
}