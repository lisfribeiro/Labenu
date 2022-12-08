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
const BaseDataBase_1 = require("./BaseDataBase");
class UserData extends BaseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'labook_users';
        this.insert = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDataBase_1.BaseDataBase.connection(this.TABLE_NAME).insert(user);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.findByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [result] = yield BaseDataBase_1.BaseDataBase.connection(this.TABLE_NAME)
                    .select("*")
                    .where({ email });
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.default = UserData;
//# sourceMappingURL=UserData.js.map