"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const UserBusiness_1 = require("./business/UserBusiness");
const UserController_1 = require("./controller/UserController");
const userController = new UserController_1.UserController(new UserBusiness_1.UserBusiness());
app_1.default.post("/signup", userController.signup);
//# sourceMappingURL=index.js.map