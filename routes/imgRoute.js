const Route = require("express").Router();
const { getImage } = require("../controllers/recipesController");

Route.get("/:filename", getImage);


module.exports = Route;