"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residence = void 0;
const Place_1 = require("./Place");
class Residence extends Place_1.Place {
    constructor(residentsQuantity, cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
        this.getResidentsQuantity = () => {
            return this.residentsQuantity;
        };
    }
}
exports.Residence = Residence;
//# sourceMappingURL=Residence.js.map