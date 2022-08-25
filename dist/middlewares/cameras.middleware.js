"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const properties = ['nome', 'fabricante', 'serie'];
function validateProperties(camera) {
    for (let i = 0; i < properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(camera, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
}
function validateValues(camera) {
    const entries = Object.entries(camera);
    for (let i = 0; i < entries.length; i += 1) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validationCamera(req, res, next) {
    const camera = req.body;
    let [valid, property] = validateProperties(camera);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(`O campo ${property} é obrigatório.`);
    }
    [valid, property] = validateValues(camera);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(`O campo ${property} não pode ser nulo ou vazio.`);
    }
    next();
}
exports.default = validationCamera;
