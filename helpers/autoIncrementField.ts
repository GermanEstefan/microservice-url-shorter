import { Model } from "mongoose";

export const autoIncrementField = async (model: Model<any>, field: string) => {
    const lastRegister = await model.find({}).sort({ [field]: -1 }).limit(1);
    let lastIndex = lastRegister[0].short_url;
    return lastIndex + 1;
}