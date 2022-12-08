"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
// import dotenv from "dotenv";
// dotenv.config();
const connection = (0, knex_1.default)({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        port: 3306,
        user: "21815093-santos",
        password: "K16riRZ6GLNiip3XZY56",
        database: "shaw-21815093-santos",
        multipleStatements: true
    },
});
exports.default = connection;
