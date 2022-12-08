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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.createUser = (id, email, password) => __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection()('User')
                .insert({
                id,
                email,
                password
            });
        });
        this.getByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.getConnection()('User')
                .where({ email });
            return result;
        });
        this.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.getConnection().select("*").from('User')
                .where({ email });
            return result[0];
        });
        this.getId = (id) => __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.getConnection()('User')
                .where({ id });
            return result;
        });
    }
    getById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.UserDatabase = UserDatabase;
