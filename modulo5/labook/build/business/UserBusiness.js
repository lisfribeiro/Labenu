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
const UserData_1 = __importDefault(require("../data/UserData"));
const User_1 = require("../model/User");
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const idGenerator_1 = require("../services/idGenerator");
class UserBusiness {
    constructor() {
        this.userData = new UserData_1.default();
        this.idGenerator = new idGenerator_1.IdGenerator();
        this.hashManager = new HashManager_1.HashManager();
        this.authenticator = new Authenticator_1.Authenticator();
        this.signup = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = input;
            if (!name || !email || !password) {
                throw new Error("Insira corretamente as informações de 'name', 'email' e 'senha'");
            }
            if (!email.includes("@")) {
                throw new Error("Verifique se o campo de e-mail foi passado corretamente");
            }
            if (password.length < 6) {
                throw new Error("A senha deve possuir no mínimo 6 caracteres");
            }
            const registeredUser = yield this.userData.findByEmail(email);
            if (registeredUser) {
                throw new Error("E-mail já cadastrado!");
            }
            const id = this.idGenerator.generateId();
            const hashedPassword = yield this.hashManager.hash(password);
            const user = new User_1.User(id, name, email, hashedPassword);
            yield this.userData.insert(user);
            const token = this.authenticator.generateToken({ id });
            return token;
        });
        this.login = (input) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = input;
            if (!email || !password) {
                throw new Error("Insira corretamente as informações de 'email' e 'senha'");
            }
            const userData = new UserData_1.default();
            const user = yield userData.findByEmail(email);
            if (!user) {
                throw new Error('Esse email não está cadastrado');
            }
            const hashManager = new HashManager_1.HashManager();
            const passwordIsCorrect = yield hashManager.compare(password, user.password);
            if (!passwordIsCorrect) {
                throw new Error('Email ou senha incorretos.');
            }
            const authenticator = new Authenticator_1.Authenticator();
            const token = authenticator.generateToken({ id: user.id });
            return token;
        });
    }
}
exports.default = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map