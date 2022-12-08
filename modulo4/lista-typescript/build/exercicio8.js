const issueRG = (birthData, issueDate) => {
    const currentYear = new Date().getFullYear();
    const formatBirthData = birthData.split("/");
    const formatYearOfBirth = issueDate.split("/");
    const age = currentYear - Number(formatBirthData[2]);
    const checkWallet = currentYear - Number(formatYearOfBirth[2]);
    const condition1 = currentYear - age <= 20 && currentYear - checkWallet >= 5;
    const condition2 = age < 20 && age <= 50 && currentYear - checkWallet >= 10;
    const condition3 = age > 50 && currentYear - checkWallet >= 15;
    return (condition1 || condition2 || condition3);
};
console.log(issueRG("11/11/1997", "14/05/2014"));
//# sourceMappingURL=exercicio8.js.map