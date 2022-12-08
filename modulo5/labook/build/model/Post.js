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
exports.Post = void 0;
class Post {
    constructor(id, photo, description, created_at, type, author_id) {
        this.id = id;
        this.photo = photo;
        this.description = description;
        this.created_at = created_at;
        this.type = type;
        this.author_id = author_id;
    }
    getId() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.id;
        });
    }
    getPhoto() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.photo;
        });
    }
    getCreatedAt() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.created_at;
        });
    }
    getDescription() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.description;
        });
    }
    getType() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.type;
        });
    }
    getAuthorId() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.author_id;
        });
    }
}
exports.Post = Post;
//# sourceMappingURL=Post.js.map