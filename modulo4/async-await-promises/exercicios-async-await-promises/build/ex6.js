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
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
const sendNotifications = (users, message) => __awaiter(void 0, void 0, void 0, function* () {
    // for (const user of users) {
    try {
        const requests = users.map(user => axios_1.default.post(`${baseURL_1.baseURL}/notifications`, {
            subscriberId: user.id,
            message
        }));
        yield Promise.all(requests);
        // await axios.post(`${baseURL}/notifications`, {
        //     subscriberId: user.id,
        //     message
        // });
        console.log("Notificações enviadas com sucesso!");
    }
    catch (_a) {
        console.log("Erro ao notificar");
    }
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        yield sendNotifications([], "oi");
    }
    catch (error) {
        const resp = ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message;
        console.log(resp);
    }
});
main();
