"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyParamsBody = void 0;
const verifyParamsBody = (req, res, next, ...rest) => {
    console.log(rest);
    const body = req.body;
    console.log(body);
    next();
};
exports.verifyParamsBody = verifyParamsBody;
