import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ChatWith = (props) => {
    const { chatId } = useParams();
    const chat = props.chat;
    const user = chat.user2 === null ? chat.user1 : chat.user2;
    
    useEffect(() => {
        if(chatId == chat._id && chatId != props.currChat) {
            props.setChat(old => {
                const newVal = { ...old };
                newVal.userName = user.name;
                newVal.messages = [];
                newVal.chatId = chat._id;
                newVal.load = true;
                newVal.lastTime = "";
                return newVal;
            });
            props.screenHandler();
        }
    }, []);

    return (
        <Link to = { "/chat/" + chat._id } className = "w-full border-y border-gray-200 p-2 px-3 flex" onClick = { () => {
            //! Clear the chat here.
            props.setChat(old => {
                const newVal = { ...old };
                newVal.userName = user.name;
                newVal.messages = [];
                newVal.chatId = chat._id;
                newVal.load = true;
                newVal.lastTime = ""

                return newVal;
            });
            props.screenHandler();
        }}>
            <img src = "/images/avatar.png" className = "rounded-full col-span-1 h-12 w-12" alt = "" />
            <div className = "pl-2">
                <div className = "font-semibold text-left">{ user.name } </div>
                <div className = "text-gray-700 text-left text-xs">Send a Message.</div>
            </div>
        </Link>
    );
}

export default ChatWith;