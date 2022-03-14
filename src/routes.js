const { Router } = require("express");
const MarcasController = require("./controllers/MarcasController");
const ProductsCategoryController = require("./controllers/ProductsCategoryController");
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


//rotas categoria de produtos
routes.post("/productsCategory", ProductsCategoryController.create);
routes.get("/productsCategory", ProductsCategoryController.readAll);
routes.get("/productsCategory/:id", ProductsCategoryController.readOne);
routes.put("/productsCategory/:id", ProductsCategoryController.update);
routes.delete("/productsCategory/:id", ProductsCategoryController.delete);


//rotas marcas
routes.post("/marcas", MarcasController.create);
routes.get("/marcas", MarcasController.readAll);
routes.get("/marcas/:id", MarcasController.readOne);
routes.put("/marcas/:id", MarcasController.update);
routes.delete("/marcas/:id", MarcasController.delete);


module.exports = routes;