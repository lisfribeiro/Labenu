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
const UserBusiness_1 = __importDefault(require("../business/UserBusiness"));
class UserController {
    constructor() {
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const input = {
                    name,
                    email,
                    password
                };
                const userBusiness = new UserBusiness_1.default();
                const token = yield userBusiness.signup(input);
                res.status(201).send({ message: "Usuário cadastrado com sucesso!", token });
            }
            catch (error) {
                res.status(500).send(error.slqMessage || error.message);
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const input = {
                    email,
                    password
                };
                const userBusiness = new UserBusiness_1.default();
                const token = yield userBusiness.login(input);
                res.status(200).send({ message: "Usuário logado com sucesso!", token });
            }
            catch (error) {
                res.status(500).send(error.slqMessage || error.message);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map