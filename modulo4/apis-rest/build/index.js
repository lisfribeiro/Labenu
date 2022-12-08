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
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "ADMIN";
    UserType["NORMAL"] = "NORMAL";
})(UserType || (UserType = {}));
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
];
app.get('/users', (req, res) => {
    const allUsers = users.map((user) => {
        return user;
    });
    res.send(allUsers);
});
app.get('/users/:type', (req, res) => {
    let codeError = 400;
    try {
        const type = req.params.type;
        let filterType = users.filter((user) => {
            if (user.type === type.toLowerCase()) {
                return user;
            }
        });
        if (!filterType.length) {
            codeError = 404;
            throw new Error("Usuário não encontrado!");
        }
        res.status(200).send(filterType);
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
app.get('/users', (req, res) => {
    let codeError = 400;
    try {
        const name = req.query.name;
        const user = users.find((user) => user.name === name);
        if (!user) {
            codeError = 404;
            throw new Error("User not found");
        }
        res.status(200).send({ user });
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
app.post("/users", (req, res) => {
    let codeError = 400;
    try {
        const { id, name, email, type, age } = req.body;
        if (!id || !name || !email || !type || !age) {
            codeError = 422;
            throw new Error("Por favor, verifique todos os campos do body!");
        }
        const newUser = {
            id,
            name,
            email,
            type,
            age
        };
        users.push(newUser);
        res.status(201).send("Usuário criado!");
    }
    catch (error) {
        res.status(codeError).send({ mensagem: error.message });
    }
});
app.put("/users", (req, res) => {
    let codeError = 400;
    try {
        const { id, name, email, type, age } = req.body;
        if (!id || !name || !email || !type || !age) {
            codeError = 422;
            throw new Error("Por favor, verifique todos os campos do body!");
        }
        const newUser = {
            id,
            name,
            email,
            type,
            age
        };
        users.push(newUser);
        res.status(201).send("Usuário criado!");
    }
    catch (error) {
        res.status(codeError).send({ mensagem: error.message });
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map