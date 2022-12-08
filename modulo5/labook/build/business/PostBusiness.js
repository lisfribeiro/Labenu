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
const PostData_1 = __importDefault(require("../data/PostData"));
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const idGenerator_1 = require("../services/idGenerator");
const inputsDTO_1 = require("../types/inputsDTO");
class PostBusiness {
    constructor() {
        this.postData = new PostData_1.default();
        this.idGenerator = new idGenerator_1.IdGenerator();
        this.hashManager = new HashManager_1.HashManager();
        this.authenticator = new Authenticator_1.Authenticator();
        this.createPost = (input) => __awaiter(this, void 0, void 0, function* () {
            const { photo, description, type, author_id } = input;
            if (!photo || !description || !type || !author_id) {
                throw new Error("Insira corretamente as informações de 'photo', 'description', 'type' e 'author_id'.");
            }
            if (type !== inputsDTO_1.TYPE.NORMAL && type !== inputsDTO_1.TYPE.EVENT) {
                throw new Error("O type passado é invalido. Preencha com os valor de normal ou evento");
            }
            const id = this.idGenerator.generateId();
            const post = {
                id,
                photo,
                description,
                type,
                author_id
            };
            yield this.postData.insert(post);
        });
        this.getPost = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error("Insira um id de post");
            }
            const postData = new PostData_1.default();
            const postDatabase = yield postData.getPostById(id);
            if (!postDatabase) {
                throw new Error("Não existe post com esse id");
            }
            return postDatabase;
        });
    }
}
exports.default = PostBusiness;
//# sourceMappingURL=PostBusiness.js.map