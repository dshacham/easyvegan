const mongoose = require("mongoose");
const { Schema } = mongoose;

const imgRecipeSchema = new Schema({
    imgUrl: { type: String, required: true }
});

module.exports = mongoose.model("Image", imgRecipeSchema);