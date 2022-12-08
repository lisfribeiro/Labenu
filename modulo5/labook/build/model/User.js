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
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    getId() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.id;
        });
    }
    getName() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.name;
        });
    }
    getEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.email;
        });
    }
    getPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.password;
        });
    }
    static toUserModel(data) {
        return new User(data.id, data.name, data.email, data.password);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map