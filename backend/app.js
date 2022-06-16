const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

// Route imports
const chatRouter = require("./routes/ChatRoutes");
const authRouter  = require("./routes/AuthRoutes");
const userRouter  = require("./routes/UserRoutes");
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

//! Routes to remove.
const User = require("./models/User");
app.use("/getUsers", async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    });
});

// Registering Middlewares
const authenticateUser = require('./middleware/authentication');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require("./middleware/error-handler")

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app