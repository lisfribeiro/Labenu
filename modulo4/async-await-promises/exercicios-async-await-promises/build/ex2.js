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
const getAllSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${baseURL_1.baseURL}/subscribers`);
    return response.data;
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const subscribers = yield getAllSubscribers();
        console.log(subscribers);
    }
    catch (error) {
        const resp = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message;
        console.log(resp);
    }
});
main();
// a. Na função nomeada utilizamos a palavra function e o async vem no início de tudo, já a arrow function é uma função não nomeada, denominada em uma variável, o async vem logo após o sinal de '=' e a '=>' vem após a tipagem do retorno.
