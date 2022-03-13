const express = require("express");
const cors = require("cors");

//lCiUAI5CtSqwPlyc

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.server();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.get("/", (req, res) => {
            res.send("Ola")
        })
    }

    server() {
        this.app.listen(5000, () => {
            console.log("Server running...");
        });
    }
}

module.exports = new App().app;