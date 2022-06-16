import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useCallback } from "react";

import MessageContainer from "./MessageContainer";
let DUMMY_CHAT = [
    {"_id": "1", "from_id": "1", "to_id": "2", "message": "Hello, How are you?", "timestamp": Date.now()},
    {"_id": "2", "from_id": "2", "to_id": "1", "message": "I'm great How are you?", "timestamp": Date.now()},
    {"_id": "3", "from_id": "2", "to_id": "1", "message": "You can change every details of a WhatsApp message with our Generator", "timestamp": Date.now()},
    {"_id": "4", "from_id": "1", "to_id": "2", "message": ":Time, delivery status and many more.", "timestamp": Date.now()},
    {"_id": "5", "from_id": "1", "to_id": "2", "message": "WhatsFake chats was made to simulate real chat conversations.", "timestamp": Date.now()},
    {"_id": "6", "from_id": "2", "to_id": "1", "message": "Your chat snapshot will be just like if it is from Whastapp.", "timestamp": Date.now()},
    {"_id": "7", "from_id": "1", "to_id": "2", "message": "Friends, today I am going to tell you about Fake WhatsApp", "timestamp": Date.now()},
    {"_id": "8", "from_id": "1", "to_id": "2", "message": "Hello, How are you?", "timestamp": Date.now()},
    {"_id": "9", "from_id": "2", "to_id": "1", "message": "First of all let me tell you that this is a WhatsApp fake chat generator,", "timestamp": Date.now()},
    {"_id": "11", "from_id": "1", "to_id": "2", "message": "Hello, How are you?", "timestamp": Date.now()},
    {"_id": "12", "from_id": "2", "to_id": "1", "message": "But, I guess that a forEach is more appropriate, because map is normally used to convert a array to another array and a forEach is used to make loops.", "timestamp": Date.now()},
    {"_id": "15", "from_id": "2", "to_id": "1", "message": "If you want to know what is inside the first element of the array, you can do that without using loops. You can access it directly:", "timestamp": Date.now()},
    {"_id": "17", "from_id": "1", "to_id": "2", "message": "It doesn't make much sense, but this works", "timestamp": Date.now()},
    {"_id": "18", "from_id": "2", "to_id": "1", "message": "Not the answer you're looking for? Browse other questions tagged javascript or ask your own question.", "timestamp": Date.now()}
];
const ChatWindow = props => {
    const [chat, sendMessage] = useState(DUMMY_CHAT);

    // ! Remove this function.
    function makeID(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    const scrollToBottom = () => {
        const messagesEnd = document.getElementById("messagesEnd");
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    const messageHandler = useCallback(async (e) => {
        let message = {"_id": makeID(4), "from_id": "1", "to_id": "2", "message": e.target.value, "timestamp": Date.now()};
        e.target.value = "";
        sendMessage(prevChat => {
            return [...prevChat, message];
        });
    }, []);

    useEffect(() => { 
        scrollToBottom();
    }, [messageHandler]);

    return (
        <div id = "chatWindow" className = "w-full hidden relative md:block" style = {{ "height": "calc(100vh - 92px)" }}>
            <div className = "border border-gray-200 bg-white shadow p-2 px-3 flex items-center sticky top-0">
                <button onClick = { props.screenHandler } className = "md:hidden block">
                    <FontAwesomeIcon className = "text-gray-600 w-6 pr-1 dark:text-gray-300" icon = { faArrowLeft }></FontAwesomeIcon> 
                </button>
                <img src = "./images/avatar.png" className = "rounded-full col-span-1 h-12 w-12" alt = "c" />
                <div className = "pl-2 font-semibold">
                    <span>Vivek Joshi</span>
                    <div className = "text-xs font-normal">Active Now</div>
                </div>
            </div>
            <MessageContainer chat = { chat }></MessageContainer>
            <div className = "absolute bottom-0 left-0 w-full">
                <div className = "relative w-full">
                    <div className = "relative">
                        <input 
                            type = "text"
                            className = "outline-none focus:shadow-md border-2 rounded-lg w-full p-3 leading-tight border-gray-300 dark:border-gray-600 bg-gray-50 focus:outline-none focus:bg-white text-gray-700 pr-16 js-password duration-300 dark:bg-gray-700 text-sm dark:text-gray-200" 
                            placeholder = "Enter your Message."
                            onKeyPress = {(e) => { if(e.key === "Enter") { messageHandler(e) } }}
                            autoFocus
                        />
                        <div className = "absolute cursor-pointer inset-y-0 right-0 px-3 flex items-center text-sm border-l-0 leading-5 border-gray-300 dark:bg-gray-700 dark:text-gray-200 border dark:border-gray-600 bg-gray-100">
                            <span> 
                                <FontAwesomeIcon className = "text-gray-600 w-6 dark:text-gray-300" icon = { faPaperPlane }></FontAwesomeIcon> 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatWindow;