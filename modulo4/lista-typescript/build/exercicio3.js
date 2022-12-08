var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function organizedInformation(film, releaseYear, gender, pointing) {
    return {
        film: film,
        releaseYear: releaseYear,
        gender: gender,
        pointing: pointing ? pointing : "O filme não possui avaliação"
    };
}
console.log(organizedInformation("Um amor para recordar", 2002, GENERO.ROMANCE));
//# sourceMappingURL=exercicio3.js.map