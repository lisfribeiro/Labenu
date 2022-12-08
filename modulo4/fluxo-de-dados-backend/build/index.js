"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const crypto_1 = __importDefault(require("crypto"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/test", (req, res) => {
    res.send("Testando");
});
app.post("/createProduct", (req, res) => {
    try {
        req.body.id = crypto_1.default.randomUUID();
        const { id, name, price } = req.body;
        if (price <= 0) {
            throw new Error("O valor do parâmetro 'price' precisa ser maior do que 0");
        }
        if (!name || !price) {
            throw new Error("Verifique se todos os parâmetros foram passados no body");
        }
        if (name !== String(name) || price !== Number(price)) {
            throw new Error("O tipo do parâmetro 'name' ou 'price' não corresponde com o esperado");
        }
        const updatedList = [...data_1.products, req.body];
        res.send(updatedList);
    }
    catch (error) {
        switch (error.message) {
            case "Verifique se todos os dados foram passados":
                res.status(422);
                break;
            case "O tipo do parâmetro 'name' ou 'price' não corresponde com o esperado":
                res.status(422);
                break;
            case "O valor do parâmetro 'price' precisa ser maior do que 0":
                res.status(422);
                break;
            default:
                res.status(500);
                break;
        }
        res.send(error.message);
    }
});
app.get("/products", (req, res) => {
    const productList = data_1.products.map((product) => {
        return product;
    });
    res.send(productList);
});
app.put("/edit/:id", (req, res) => {
    try {
        const id = req.params.id;
        const [findProductEdit] = data_1.products.filter((product) => {
            return product.id === id;
        });
        if (req.body.price <= 0) {
            throw new Error("O valor do parâmetro 'price' precisa ser maior do que 0");
        }
        if (!req.body.price) {
            throw new Error("Price inexistente");
        }
        if (req.body.price !== Number(req.body.price)) {
            throw new Error("Price está com o formato incorreto");
        }
        const editPrice = data_1.products.filter((product) => {
            if (product.id === id) {
                product.price = req.body.price;
                return product;
            }
        });
        if (!findProductEdit) {
            throw new Error("Produto não encontrado");
        }
        res.send(editPrice);
    }
    catch (error) {
        switch (error.message) {
            case "Price inexistente":
                res.status(401);
                break;
            case "Price está com o formato incorreto":
                res.status(422);
                break;
            case "O valor do parâmetro 'price' precisa ser maior do que 0":
                res.status(422);
                break;
            case "Produto não encontrado":
                res.status(404);
                break;
            default:
                res.status(500);
                break;
        }
        res.send(error.message);
    }
});
app.delete("/delete/:idProduct", (req, res) => {
    try {
        const idProduct = req.params.idProduct;
        const [findProductDelete] = data_1.products.filter((product) => {
            return product.id === idProduct;
        });
        const deleteProduct = data_1.products.filter((product) => {
            if (product.id !== idProduct) {
                return product;
            }
        });
        if (!findProductDelete) {
            throw new Error("Produto não encontado");
        }
        res.send(deleteProduct);
    }
    catch (error) {
        switch (error.message) {
            case "Produto não encontrado":
                res.status(404);
                break;
            default:
                res.status(500);
                break;
        }
        res.send(error.message);
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
