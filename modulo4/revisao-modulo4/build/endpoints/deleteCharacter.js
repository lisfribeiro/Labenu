"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacter = void 0;
const data_1 = require("../data");
function deleteCharacter(req, res) {
    const id = Number(req.params.id);
    const index = data_1.characters.findIndex(character => character.id === id);
    if (index > -1)
        data_1.characters.splice(index, 1);
    res.status(200).end("Personagem deletado!");
}
exports.deleteCharacter = deleteCharacter;
//# sourceMappingURL=deleteCharacter.js.map