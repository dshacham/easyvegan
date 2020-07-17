const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    imgURL: { type: String },
    category: { type: String, required: true },
    preparation: { type: String, required: true },
    cooking: { type: String, required: true },
    yield: { type: String },
    ings: { type: String, required: true },
    directions: { type: String, required: true },
    cookware: { type: String },
    comments: { type: String },
    sourceURL: { type: String }
});

module.exports = mongoose.model("Recipe", RecipeSchema);