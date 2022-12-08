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
const UserDatabase_1 = require("../data/UserDatabase");
const Authenticator_1 = require("../services/Authenticator");
const Generate_1 = require("../services/Generate");
const HashManager_1 = require("../services/HashManager");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, nickname, email, password } = req.body;
            if (!name || !nickname || !email || !password) {
                res.statusCode = 422;
                throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'");
            }
            if (req.body.email.indexOf("@") === -1) {
                throw new Error('Email inválido');
            }
            if (!req.body.password || req.body.password.length < 6) {
                throw new Error('Senha inválida');
            }
            const userDB = new UserDatabase_1.UserDatabase();
            const user = yield userDB.getByEmail(email);
            if (user) {
                res.statusCode = 409;
                throw new Error('Email já cadastrado');
            }
            const generate = new Generate_1.Generate();
            const id = generate.generateId();
            const hashManager = new HashManager_1.HashManager();
            const hash = yield hashManager.hash(password);
            const newUser = { id, name, nickname, email, password: hash };
            yield userDB.createUser(id, email, password);
            const authenticator = new Authenticator_1.Authenticator();
            const token = authenticator.generateToken({ id });
            res.status(201).send({ newUser: {
                    id, name, nickname, email,
                }, token });
        }
        catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" });
            }
            else {
                res.send({ message: error.message });
            }
        }
    });
}
exports.default = createUser;
