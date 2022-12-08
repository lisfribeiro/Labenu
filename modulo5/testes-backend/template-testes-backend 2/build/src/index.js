"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const UserController_1 = __importDefault(require("./controller/UserController"));
const userController = new UserController_1.default();
app_1.default.get("/user/:id", userController.getUserById);
//# sourceMappingURL=index.js.map