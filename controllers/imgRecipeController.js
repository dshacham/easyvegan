const Grid = require("gridfs-stream");
const Image = require("../models/imgRecipeSchema");
const mongoose = require("mongoose");
const env = require("../config/config");

const mongoURI = env.db;
const conn = mongoose.createConnection(mongoURI);

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
});


exports.getImage = async (req, res) => {

    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        res.contentType("image/png");
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    });
};

exports.postRecipeImage = async (req, res) => {

    let addImage = new Image(
        { imgUrl: `${req.file.filename}` }
    );

    await addImage.save();

    res.json({ addImage });

};

exports.getRecipeImgInfo = async (req, res) => {
    let recipeImages = await Image.find();
    res.json({ recipeImages });
};