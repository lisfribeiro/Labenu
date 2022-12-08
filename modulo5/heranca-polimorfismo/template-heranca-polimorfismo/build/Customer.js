"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const User_1 = require("./User");
class Customer extends User_1.User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
exports.Customer = Customer;
const customer1 = new Customer("1", "customer1@gmail.com", "Paulo", "7070", "7070707070707070");
//# sourceMappingURL=Customer.js.map