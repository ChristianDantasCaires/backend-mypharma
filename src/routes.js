const { Router } = require("express");
const ProductsController = require("./controllers/ProductsController");
const SessionsController = require("./controllers/SessionsController");
const UserController = require("./controllers/UserController");
const auth = require("./middlewares/auth");

const routes = new Router();


routes.post("/sessions", SessionsController.create);

//middleware
//routes.use(auth);


//rotas usuarios
routes.post("/users", UserController.create);
routes.get("/users", UserController.readAll);
routes.get("/users/:id", UserController.readOne);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);


//rotas produtos
routes.post("/users/:user_id/products", ProductsController.create);
routes.get("/users/:user_id/products", ProductsController.readAll);
routes.put("/users/:user_id/products/", ProductsController.update);
routes.delete("/users/:user_id/products/", ProductsController.delete);


module.exports = routes;