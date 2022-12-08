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
class UserDatabase extends BaseDatabase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'users';
        this.insertUser = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDataBase.connection(this.TABLE_NAME)
                    .insert(user);
                console.log(user);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield BaseDatabase_1.BaseDataBase.connection(this.TABLE_NAME)
                    .select("*")
                    .where(email);
                return response;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=UserDataBase.js.map