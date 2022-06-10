const express = require("express");
require('dotenv').config();
//require('express-async-errors');
const app = express();

// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())

require('./models/User');

const authenticateUser = require('./middleware/authentication');
// Route imports
const items = require("./routes/ItemRoutes");
const authRouter  = require("./routes/AuthRoutes");


const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require("./middleware/error-handler")

//Routes
//app.use("/api/v1", items,authenticateUser);

app.use("/api/v1/auth", authRouter);
app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);


module.exports = app