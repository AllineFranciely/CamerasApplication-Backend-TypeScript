"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cameras_controllers_1 = __importDefault(require("../controllers/cameras.controllers"));
const cameras_middleware_1 = __importDefault(require("../middlewares/cameras.middleware"));
const router = (0, express_1.Router)();
const cameraController = new cameras_controllers_1.default();
router.get('/cameras', cameraController.getAll);
router.post('/cameras/', cameras_middleware_1.default, cameraController.create);
exports.default = router;
