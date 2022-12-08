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
const UserBusiness_1 = require("../business/UserBusiness");
const UserData_1 = require("../data/UserData");
class UserController {
    constructor() {
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const userBusiness = new UserBusiness_1.UserBusiness(new UserData_1.UserData);
                const user = yield userBusiness.getUser(id);
                res.status(200).send(user);
            }
            catch (error) {
                res.status(500).send({ message: error.slqMessage || error.message });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map