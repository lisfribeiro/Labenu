"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PostController_1 = __importDefault(require("./PostController"));
const UserController_1 = __importDefault(require("./UserController"));
const userController = new UserController_1.default();
const postController = new PostController_1.default();
app_1.default.post("/user/signup", userController.signup);
app_1.default.post("/user/login", userController.login);
app_1.default.post("/post", postController.createPost);
app_1.default.get("/post/:id", postController.getPostById);
//# sourceMappingURL=index.js.map