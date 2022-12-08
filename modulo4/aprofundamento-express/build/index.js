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
// 1
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
// 3
const tasks = [
    {
        userId: 1,
        id: 1,
        title: "Lavar a louça",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "Estudar Typescript",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "Ir na academia",
        completed: true
    },
    {
        userId: 3,
        id: 4,
        title: "Assistir a nova temporada de Stranger Things",
        completed: true
    }
];
// 4
app.get("/tasksDone/:status", (req, res) => {
    const status = req.params.status;
    const tasksDone = tasks.filter((task) => {
        if (String(task.completed) === status) {
            return task;
        }
    });
    res.send(tasksDone);
});
// 5
app.post("/createTask", (req, res) => {
    const { userId, id, title, completed } = req.body;
    const updatedArray = [...tasks, req.body];
    res.send(updatedArray);
});
// 6
app.put("/edit/:id", (req, res) => {
    const id = Number(req.params.id);
    const changeStatus = tasks.filter((task) => {
        if (task.id === id) {
            task.completed = !task.completed;
            return task;
        }
    });
    res.send(changeStatus);
});
// 7
app.delete("/deleteTask/:idTask", (req, res) => {
    const idTask = Number(req.params.idTask);
    const deleteTask = tasks.filter((task) => {
        if (task.id !== idTask) {
            return task;
        }
    });
    res.send(deleteTask);
});
// 8
app.get("/tasks/:userId", (req, res) => {
    const userId = Number(req.params.userId);
    console.log(userId);
    const returnTasks = tasks.filter((task) => {
        if (task.userId === userId) {
            return task;
        }
    });
    if (!returnTasks.length) {
        res.status(400).send("Não encontrado");
    }
    res.send(returnTasks);
});
app.listen(3005, () => {
    console.log("Server is running in http://localhost:3005");
});
