const { Router } = require("express");
const MarcasController = require("./controllers/MarcasController");
const ProductsCategoryController = require("./controllers/ProductsCategoryController");
const ProductsController = require("./controllers/ProductsController");
const SessionsController = require("./controllers/SessionsController");
const UserController = require("./controllers/UserController");
const auth = require("./middlewares/auth");

const routes = new Router();


routes.post("/sessions", SessionsController.create);

//middleware
routes.use(auth);


//rotas usuarios
routes.post("/users", UserController.create);
routes.get("/users", UserController.readAll);
routes.get("/users/:id", UserController.readOne);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);


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