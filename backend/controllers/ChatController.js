const Chat = require("../models/Chat");
const Message = require("../models/Message");
const User = require("../models/User");

exports.ChatController = {
    getChatList: async(req, res, next) => {
        let user_id = req.params.userId;
        let user = await User.findById(user_id).exec();
        
        if(!user)
            return next(new Error("User Doesn't Exist"));

        let chats = await Chat.find().where({
            $or: [{ user1: user_id }, { user2: user_id }]
        }).populate({path: "message", select: "from_id timestamp message updatedAt createdAt"})
        .populate({match: { _id: { $ne: user_id}}, path: "user1", select: "first_name last_name avatar"})
        .populate({match: { _id: { $ne: user_id}}, path: "user2", select: "first_name last_name avatar"})
        .sort({"timestamp": -1});

        res.status(200).json({
            success: true,
            request: req.body,
            chats
        });
    },

    startChat: async (req, res, next) => {
        user_id = req.params.userId;
        friend_id = req.body.friend_id;

        try {
            let chat = await Chat.findOne({
                $or: [{ user1: user_id, user2: friend_id }, {user1: friend_id, user2: user_id}]
            });

            if(chat)
                return res.json({"result": "success"});

            chat = await Chat.create({ user1: user_id, user2: friend_id, message: null });
            res.json({
                "success": true,
                chat
            });
        } catch(err) {
            return next(err);
        }
    },

    checkMessage: async (req, res, next) => {
        // 
    },

    sendMessage: async (req, res, next) => {
        // -> Update the chats last message.
        const chatId = req.params.chatId;
        const user_id = req.body.user_id;
        
        let chat = await Chat.findOne().where({
            $or: [{ "user1": user_id, "_id": chatId }, { "user2": user_id, "_id": chatId }]
        }).exec();
        
        if(!chat)
            return next(new Error("Invalid Request"));

        let msg = req.body.message;

        msg = await Message.create({ chat_id: chatId, message: msg, from_id: user_id });
        chat = await Chat.findOneAndUpdate({ _id: chatId }, { message: msg._id });

        res.status(200).json({
            success: true,
            msg
        });
    }
}