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
const http_status_codes_1 = require("http-status-codes");
const cameras_services_1 = __importDefault(require("../services/cameras.services"));
class CameraController {
    constructor(cameraService = new cameras_services_1.default()) {
        this.cameraService = cameraService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const cameras = yield this.cameraService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(cameras);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const camera = req.body;
            const cameraCreated = yield this.cameraService.create(camera);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(cameraCreated);
        });
    }
}
exports.default = CameraController;
