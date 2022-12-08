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
function getProfile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.headers.authorization;
            if (!token) {
                throw new Error("Token não enviado");
            }
            const authenticator = new Authenticator_1.Authenticator();
            const data = authenticator.getData(token);
            const userDB = new UserDatabase_1.UserDatabase();
            const user = yield userDB.getId(data.id);
            res.send({
                user: {
                    id: user.id,
                    email: user.email
                }
            });
        }
        catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message || "Internal server error" });
            }
            else {
                res.send({ message: error.message });
            }
        }
    });
}
exports.default = getProfile;
