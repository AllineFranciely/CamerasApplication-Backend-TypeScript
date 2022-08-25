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
class CameraModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM cameras');
            const [rows] = result;
            return rows;
        });
    }
    create(camera) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, fabricante, serie } = camera;
            const result = yield this.connection.execute('INSERT INTO cameras (nome, fabricante, serie) VALUES (?, ?, ?)', [nome, fabricante, serie]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, camera);
        });
    }
}
exports.default = CameraModel;
