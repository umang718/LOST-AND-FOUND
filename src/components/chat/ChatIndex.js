import { useEffect } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

const ChatIndex = () => {
    useEffect(() => {
        document.title = "Chat - LoFo"
    }, []);

    function screenHandler() {
        let width = window.innerWidth;
        const chatList = document.getElementById("chatList");
        const chatWindow = document.getElementById("chatWindow");

        if(width < 768) {
            if(chatList.classList.contains("w-full")) {
                console.log("1");
                chatList.classList.remove("w-full");
                chatList.classList.add("w-0");
                chatWindow.classList.remove("hidden");
            }
            else {
                console.log("2");
                chatList.classList.add("w-full");
                chatList.classList.remove("w-0");
                chatWindow.classList.add("hidden");
            }
        }
    }

    return (
        <div className = "w-full flex mt-3" style = {{ "height": "calc(100vh - 300px)" }}>
            <ChatList screenHandler = { screenHandler }></ChatList>
            <ChatWindow screenHandler = { screenHandler }></ChatWindow>
        </div>
    );
}

export default ChatIndex;