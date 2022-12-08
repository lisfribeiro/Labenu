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
exports.UserBusiness = void 0;
class UserBusiness {
    constructor(userData) {
        this.userData = userData;
        this.getUser = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error("Insira um id de usuário");
            }
            const userDataBase = yield this.userData.getPostById(id);
            if (!userDataBase) {
                throw new Error("Não existe usuário com esse id");
            }
            return userDataBase;
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map