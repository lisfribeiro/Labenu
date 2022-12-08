"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommercialClient_1 = require("./CommercialClient");
const IndustrialClient_1 = require("./IndustrialClient");
const commercialClient = new CommercialClient_1.CommercialClient("Lica", 121, 450, "12345678910111", 11, "40406532");
console.log(commercialClient.calculateBill());
const industrialClient = new IndustrialClient_1.IndustrialClient("Lolo", 930, 1200, 33301667981, 21, "70965432");
console.log(industrialClient.calculateBill());
//# sourceMappingURL=index.js.map