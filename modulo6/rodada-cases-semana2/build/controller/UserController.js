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
exports.UserController = void 0;
class UserController {
    constructor(userBusiness) {
        this.userBusiness = userBusiness;
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password, role } = req.body;
                const user = {
                    name,
                    email,
                    password,
                    role
                };
                const token = yield this.userBusiness.signup(user);
                res.status(201).send({
                    message: "Usuário criado com sucesso!", token
                });
                console.log(user, token);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map