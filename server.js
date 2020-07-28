const express = require("express");
const server = express();
const mongoose = require("mongoose");
const createError = require("http-errors");
const env = require("./config/config");
const cors = require("./middleware/security");

const PORT = process.env.PORT || 4000;

const indexRoute = require("./routes/indexRoute");
const recipesRoute = require("./routes/recipesRoute");
const sweetRoute = require("./routes/sweetRoute");
const savouryRoute = require("./routes/savouryRoute");
const imgRoute = require("./routes/imgRoute");
const imgRecipeRoute = require("./routes/imgRecipeRoute");

mongoose.connect(env.db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", (err) => console.log(err));
mongoose.connection.on("open", () => console.log("database connected"));

server.use(express.json());
server.use(cors);
server.use(express.urlencoded({ extended: false }));
server.use(express.static("client/build"))

server.use("/", indexRoute);
server.use("/recipes", recipesRoute);
server.use("/sweets", sweetRoute);
server.use("/savourys", savouryRoute);
server.use("/image", imgRoute);
server.use("/imgrecipe", imgRecipeRoute);

server.use((req, res, next) => {
    next(createError(404));
});

server.use((err, req, res, next) => {
    res.json({ status: err.status, err: err.message });
});

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});