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
exports.UserData = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class UserData extends BaseDatabase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'User_Arq';
        this.getPostById = (id) => __awaiter(this, void 0, void 0, function* () {
            const [result] = yield BaseDatabase_1.BaseDataBase.connection(this.TABLE_NAME)
                .select("*")
                .where({ id });
            return result;
        });
    }
}
exports.UserData = UserData;
//# sourceMappingURL=UserData.js.map