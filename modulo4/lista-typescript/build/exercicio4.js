var SECTORS;
(function (SECTORS) {
    SECTORS["MARKETING"] = "Marketing";
    SECTORS["VENDAS"] = "Vendas";
    SECTORS["FINANCEIRO"] = "Financeiro";
})(SECTORS || (SECTORS = {}));
const contributorInformation = [
    { nome: "Marcos", salário: 2500, setor: SECTORS.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SECTORS.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: SECTORS.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SECTORS.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SECTORS.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SECTORS.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SECTORS.MARKETING, presencial: true }
];
function knowSector(contributorInformation) {
    const filteredPerson = contributorInformation.filter((employee) => {
        return (employee.setor === "Marketing" && employee.presencial === true);
    });
    return filteredPerson;
}
console.log(knowSector(contributorInformation));
//# sourceMappingURL=exercicio4.js.map