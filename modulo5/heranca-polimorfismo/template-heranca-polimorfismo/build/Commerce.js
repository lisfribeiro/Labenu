"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commerce = void 0;
const Place_1 = require("./Place");
class Commerce extends Place_1.Place {
    constructor(floorsQuantity, cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
        this.getFloorsQuantity = () => {
            return this.floorsQuantity;
        };
    }
}
exports.Commerce = Commerce;
//# sourceMappingURL=Commerce.js.map