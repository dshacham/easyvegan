const path = require("path");

exports.indexController = (req, res, next) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
}