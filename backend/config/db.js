const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected to: ${con.connection.host}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;