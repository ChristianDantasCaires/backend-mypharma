const { Router } = require("express");
const ProductsController = require("./controllers/ProductsController");
const UserController = require("./controllers/UserController");

const routes = new Router();

//rotas usuarios
routes.get("/users", UserController.readAll);
routes.post("/users", UserController.create);


//rotas produtos
routes.post("/products", ProductsController.create);
routes.get("/products", ProductsController.readAll);
routes.get("/products/:id", ProductsController.readOne);
routes.put("/products/:id", ProductsController.update);
routes.delete("/products/:id", ProductsController.delete);


module.exports = routes;