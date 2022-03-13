const { Router } = require("express");
const LoginController = require("./controllers/LoginController");

const routes = new Router();

routes.get("/", LoginController.test);

module.exports = routes;