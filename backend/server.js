const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({path: "./config/.env"});

connectDB();
app.get('/', (req, res) => {
    res.send('Hello Umang!!!')
});

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});