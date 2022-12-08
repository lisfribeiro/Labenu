"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createUser_1 = __importDefault(require("./endpoints/createUser"));
const login_1 = __importDefault(require("./endpoints/login"));
const getProfile_1 = __importDefault(require("./endpoints/getProfile"));
app_1.default.post('/user/signup', createUser_1.default);
app_1.default.post('/user/login', login_1.default);
app_1.default.get('/user/profile', getProfile_1.default);
