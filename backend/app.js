const express = require("express");
const app = express();

app.use(express.json())

// Route imports
const items = require("./routes/ItemRoutes");
app.use("/api/v1/items", items);

module.exports = app