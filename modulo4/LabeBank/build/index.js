"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const users = [
    {
        name: "Serena",
        CPF: "112.777.413-15",
        birthDate: "10/10/1990",
        balance: 3000,
        transactions: [
            {
                value: 200,
                date: "03/06/2022",
                description: "Compra semanal"
            },
            {
                value: 2000,
                date: "09/11/2022",
                description: "Aluguel"
            }
        ]
    },
    {
        name: "Blair",
        CPF: "189.787.915-10",
        birthDate: "11/11/1991",
        balance: 2000,
        transactions: [
            {
                value: 1000,
                date: "01/07/2022",
                description: "Escola"
            }
        ]
    },
    {
        name: "Chuck",
        CPF: "001.343.777-40",
        birthDate: "11/12/1987",
        balance: 1500,
        transactions: [
            {
                value: 1200,
                date: "01/08/2022",
                description: "Relógio"
            }
        ]
    }
];
app.get("/users", (req, res) => {
    let codeError = 400;
    try {
        const name = req.query.name;
        const cpf = req.query.cpf;
        const checkBalance = users.filter((user) => {
            if (user.name === name && user.CPF === cpf) {
                return user;
            }
        }).map((user) => {
            return user.balance;
        });
        if (checkBalance.length === 0) {
            codeError = 404;
            throw new Error("Usuário não encontrado");
        }
        res.send(checkBalance);
    }
    catch (error) {
        res.status(codeError).send({ mensagem: error.message });
    }
});
app.put("/users", (req, res) => {
    const name = req.query.name;
    const CPF = req.query.CPF;
    const addBalance = users.filter((user) => {
        if (user.name === name && user.CPF === CPF) {
            user.balance = user.balance + req.body.balance;
            return user;
        }
    });
    res.status(200).send(addBalance);
});
app.post("/users", (req, res) => {
    const user = users.find((user) => {
        if (user.CPF === req.body.cpf) {
            return user;
        }
    });
    console.log(user);
    if (user) {
        const transaction = user.transactions.find((transaction) => {
            if (transaction.value === req.body.transactions.value && transaction.date === req.body.transactions.date && transaction.description === req.body.transactions.description) {
                return transaction;
            }
        });
        console.log(transaction);
        if (transaction) {
            user.balance = user.balance - transaction.value;
        }
        if (!(transaction === null || transaction === void 0 ? void 0 : transaction.date)) {
            return req.body.transaction.date = "Hoje";
        }
    }
    res.send(user);
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map