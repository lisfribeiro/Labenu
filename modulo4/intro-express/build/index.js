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
app.get("/", (req, res) => {
    res.send("Hello from Express");
});
const users = [
    {
        id: 1,
        name: "Eleven",
        phone: "(11) 111111111",
        email: "eleven@gmail.com",
        website: "eleven.net"
    },
    {
        id: 2,
        name: "Hopper",
        phone: "(23) 988765432",
        email: "hopper@gmail.com",
        website: "hopper.org"
    },
    {
        id: 3,
        name: "Dustin",
        phone: "(32) 978765432",
        email: "dustin@gmail.com",
        website: "dustin.com"
    }
];
app.get("/users", (req, res) => {
    res.send(users);
});
const posts = [
    {
        userId: 1,
        id: 1,
        title: "O mostro e a super-heroína",
        body: "Murray e Joyce viajam para o Alasca e On enfrenta duras consequências. Robin e Nancy fazem uma descoberta sobre os monstros de Hawkins. Dr. Owens traz más notícias"
    },
    {
        userId: 2,
        id: 2,
        title: "Querido Billy",
        body: "Max está em perigo e o tempo está se esgotando. Um paciente do hospital Pennuhurst recebe visitas. Na Rússia, Hopper vai à luta"
    },
    {
        userId: 2,
        id: 3,
        title: "Clube Hellfire",
        body: "Na nova escola, On precisa aprender a lidas com os valentões. Joyce abre um pacote misterioso. Em Hawkins, uma jogadora atrevida agita a noite da D&D."
    },
];
app.get("/posts", (req, res) => {
    res.send(posts);
});
app.get("/posts/:userId", (req, res) => {
    const userId = (req.params.userId);
    const getPost = posts.filter((post) => {
        return post.userId === Number(userId);
    });
    getPost.length > 0 ? res.send(getPost) : res.send("id não encontrado");
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
