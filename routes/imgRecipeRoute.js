const Route = require("express").Router();
const upload = require("../middleware/gridFsStorage");
const { postRecipeImage, getRecipeImgInfo, getImage } = require("../controllers/imgRecipeController");

Route.post("/", upload.single("file"), postRecipeImage);

Route.get("/", getRecipeImgInfo);

Route.get("/:filename", getImage);

module.exports = Route;