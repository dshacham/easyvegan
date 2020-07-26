const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    imgUrl: { type: String, required: true },
    category: { type: String, required: true },
    preparation: { type: String, required: true },
    cooking: { type: String },
    amount: { type: String },
    ings: { type: Array, required: true },
    directions: { type: Array, required: true },
    cookware: { type: String },
    comments: { type: String },
    sourceURL: { type: String }
});

module.exports = mongoose.model("Recipe", RecipeSchema);