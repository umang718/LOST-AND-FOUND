const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    "_id": {
        type: String,
        required: [true, "Invalid request"],
    },
    "from_id": {
        type: String,
        required: [true, "Invalid request"],
    },
    "message": {
        type: String,
        required: [true, "No message found"],
    },
    "timestamp": {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Chat", ChatSchema);