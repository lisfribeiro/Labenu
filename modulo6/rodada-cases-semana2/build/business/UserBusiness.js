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
const UserDataBase_1 = require("../data/UserDataBase");
const User_1 = require("../model/User");
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const IdGenerator_1 = require("../services/IdGenerator");
class UserBusiness {
    constructor(userDatabase = new UserDataBase_1.UserDatabase(), authenticator = new Authenticator_1.Authenticator(), hashManager = new HashManager_1.HashManager(), idGenerator = new IdGenerator_1.IdGenerator()) {
        this.userDatabase = userDatabase;
        this.authenticator = authenticator;
        this.hashManager = hashManager;
        this.idGenerator = idGenerator;
    }
    signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            let { role } = user;
            try {
                if (!name || !email || !password) {
                    throw new Error("Insira corretamente as informações de 'name', 'email' e 'password'");
                }
                if (!role) {
                    role = User_1.USER_ROLES.NORMAL;
                }
                if (!email.includes("@")) {
                    throw new Error("Verifique se o campo de e-mail foi passado corretamente");
                }
                if (password.length < 6) {
                    throw new Error("A senha deve possuir no mínimo 6 caracteres");
                }
                if (role.toUpperCase() == "ADMIN") {
                    role = User_1.USER_ROLES.ADMIN;
                }
                if (role.toUpperCase() == "NORMAL") {
                    role = User_1.USER_ROLES.NORMAL;
                }
                if (role !== User_1.USER_ROLES.NORMAL && role !== User_1.USER_ROLES.ADMIN) {
                    throw new Error("O role passado é invalido. Preencha com os valores de NORMAL ou ADMIN");
                }
                const registeredUser = yield this.userDatabase.getUserByEmail(email);
                if (registeredUser) {
                    throw new Error("E-mail já cadastrado");
                }
                const id = this.idGenerator.generateId();
                const hashPassword = yield this.hashManager.hash(password);
                const user = new User_1.User(id, name, email, hashPassword, role);
                yield this.userDatabase.insertUser(user);
                const token = this.authenticator.generateToken(id);
                return token;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map