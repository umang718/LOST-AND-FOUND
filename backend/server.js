const app = require("./app");
const env = require("dotenv");
const connectDB = require("./config/db");

env.config({path: "./config/.env"});

app.get('/', (req, res) => {
    res.status(200).json({msg: "Hello Son"})
});

const start = async() => {
    try {
        await connectDB();

        app.listen(process.env.PORT, () => {
            console.log(`Server is working on http://localhost:${process.env.PORT}`)
        });
    } catch (err) {
        console.log(err);
    }
}

start();