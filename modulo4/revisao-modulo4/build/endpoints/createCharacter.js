"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = void 0;
const data_1 = require("../data");
function createCharacter(req, res) {
    const { name, gender, description } = req.body;
    console.log(req.headers["content-type"]);
    data_1.characters.push({
        id: Date.now(),
        name,
        gender,
        description
    });
    res.status(201).end("Personagem criado!");
}
exports.createCharacter = createCharacter;
//# sourceMappingURL=createCharacter.js.map