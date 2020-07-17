const mongoose = require("mongoose");
const { Schema } = mongoose;

const imgRecipeSchema = new Schema({
    imgUrl: { type: String },
});

module.exports = mongoose.model("imgRecipe", imgRecipeSchema);