const Route = require("express").Router();
const { getRecipes, getRecipe, postRecipe, putRecipe, deleteRecipe, getImage } = require("../controllers/recipesController");
const upload = require("../middleware/gridFsStorage");

Route.get("/", getRecipes);
Route.get("/:id", getRecipe);
Route.post("/", upload.single("file"), postRecipe);
Route.put("/:id", putRecipe);
Route.delete("/:id", deleteRecipe);

module.exports = Route;