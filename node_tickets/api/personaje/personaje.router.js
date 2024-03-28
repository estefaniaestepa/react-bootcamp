const express = require("express");
const personajeRouter = express.Router();
const { isAuth } = require("../middleware/auth.middleware");
const { create, getAll } = require("./personaje.controller");

personajeRouter.post("/", create);
personajeRouter.get("/", getAll);

module.exports = personajeRouter;
