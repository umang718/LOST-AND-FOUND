const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    "first_name": String,
    "last_name": String,
    "email": String,
    "password": String,
    "avatar": String,
    "timestamp": Date
});

module.exports = mongoose.model("User", UserSchema);