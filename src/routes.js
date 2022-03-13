const { Router } = require("express");
const LoginController = require("./controllers/LoginController");
const UserController = require("./controllers/UserController");

const routes = new Router();

routes.get("/", LoginController.login)


routes.post("/users", UserController.create);
routes.get("/users", UserController.readAll);

module.exports = routes;