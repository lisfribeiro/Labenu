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
const PostBusiness_1 = __importDefault(require("../business/PostBusiness"));
class PostController {
    constructor() {
        this.createPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { photo, description, type, author_id } = req.body;
                const input = {
                    photo,
                    description,
                    type,
                    author_id
                };
                const tokenAuthorization = req.headers.authorization;
                if (!tokenAuthorization) {
                    res.status(422).send("Esse endpoint exige uma autorização a ser passada nos headers");
                }
                const postBusiness = new PostBusiness_1.default();
                const token = yield postBusiness.createPost(input);
                res.status(201).send({ message: "Post criado com sucesso!", token });
            }
            catch (error) {
                res.status(500).send(error.slqMessage || error.message);
            }
        });
        this.getPostById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const tokenAuthorization = req.headers.authorization;
                if (!tokenAuthorization) {
                    res.status(422).send("Esse endpoint exige uma autorização a ser passada nos headers");
                }
                const postBusiness = new PostBusiness_1.default();
                const post = yield postBusiness.getPost(id);
                res.status(200).send(post);
            }
            catch (error) {
                res.status(500).send({ message: error.slqMessage || error.message });
            }
        });
    }
}
exports.default = PostController;
//# sourceMappingURL=PostController.js.map