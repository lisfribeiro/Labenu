"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generate = void 0;
const uuid_1 = require("uuid");
class Generate {
    generateId() {
        return (0, uuid_1.v4)();
    }
}
exports.Generate = Generate;
