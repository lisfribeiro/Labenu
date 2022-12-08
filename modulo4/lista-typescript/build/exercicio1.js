function personalInformation(name, birthDate) {
    const divideVariable = birthDate.split("/");
    return (`Olá, eu me chamo ${name}, nasci no dia ${divideVariable[0]} do mês ${divideVariable[1]} do ano de ${divideVariable[2]}.`);
}
console.log(personalInformation("Lis", "11/11/1997"));
//# sourceMappingURL=exercicio1.js.map