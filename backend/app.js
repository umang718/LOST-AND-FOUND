const express = require("express");
const app = express();

// Route imports
const items = require("./routes/ItemRoutes");
app.use("/api/v1", items);

// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())

module.exports = app