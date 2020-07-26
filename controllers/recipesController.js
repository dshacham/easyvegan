const createError = require("http-errors");
const Recipes = require("../models/recipeSchema");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const env = require("../config/config");

// Mongo URI
const mongoURI = env.db;
// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

//Init gfs
let gfs;

conn.once('open', () => {
    //Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
});


exports.getRecipes = async (req, res, next) => {

    try {
        const recipes = await Recipes.find();
        res.json({ success: true, recipes: recipes });
    }
    catch (err) {
        next(err);
    };
};

exports.getRecipe = async (req, res, next) => {
    const { id } = req.params;

    try {
        const recipe = await Recipes.findById(id);
        if (!recipe) throw createError(404);
        res.json({ success: true, recipe: recipe });
    }
    catch (err) {
        next(err);
    };
};

exports.getImage = async (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        res.contentType("image/jpeg");
        const readStream = gfs.createReadStream(file.filename);
        console.log(file, "file");
        readStream.pipe(res);
    });
};

exports.postRecipe = async (req, res, next) => {

    try {
        const newRecipe = new Recipes({
            title: req.body.title,
            description: req.body.description,
            imgUrl: req.file ? `/image/${req.file.filename}` : `/imgrecipe/recipeImgDefault.png`,
            category: req.body.category,
            preparation: req.body.preparation,
            cooking: req.body.cooking,
            amount: req.body.amount,
            ings: req.body.ings,
            directions: req.body.directions,
            cookware: req.body.cookware,
            comments: req.body.comments,
            sourceURL: req.body.sourceURL
        });
        await newRecipe.save();
        res.json({ success: true, recipe: newRecipe });
    }
    catch (err) {
        next(err);
    };
};

exports.putRecipe = async (req, res, next) => {
    const { id } = req.params;
    const recipe = req.body;

    try {
        const updateRecipe = await Recipes.findByIdAndUpdate(id, recipe, { new: true });
        if (!recipe) throw createError(404);
        res.json({ success: true, updatedRecipe: updateRecipe });
    }
    catch (err) {
        next(err);
    };
};

exports.deleteRecipe = async (req, res, next) => {
    const { id } = req.params;

    try {
        const recipe = await Recipes.findByIdAndDelete(id);
        if (!recipe) throw createError(404);
        const recipes = await Recipes.find({});
        res.json({ success: true, recipe: recipes });
    }
    catch (err) {
        next(err);
    };
};