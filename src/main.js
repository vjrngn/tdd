require("dotenv").config();
const express = require("express");

const postRoutes = require("./http/routes/posts");

const app = express();
app.use(express.json());

app.use("/posts", postRoutes);

module.exports = app;
