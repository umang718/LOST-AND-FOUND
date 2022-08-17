import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useContext, useEffect } from "react";

import MessageContainer from "./MessageContainer";
import { AuthContext } from "../contexts/authContext";
import { useParams } from "react-router";

const ChatWindow = props => {
    const setChat = props.setChat;
    const { chatId } = useParams();
    const authCntxt = useContext(AuthContext);

    useEffect(() => {
        setChat(old => {
            old.chatId = chatId;
            return old;
        })
    }, [])

    //! Temp id.
    const makeID = useCallback(length => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }, []);

    const scrollToBottom = useCallback(() => {
        const messagesEnd = document.getElementById("messagesEnd");
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }, []);

    //! Handle Errors.
    const messageHandler = async () => {
        const newId = makeID(4);
        const msgBox = document.getElementById("msgBox");
        const msg = msgBox.value;
        if(msg == "")
            return;
        msgBox.value = "";

        scrollToBottom();

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}api/v1/chat/sendMessage/${props.chat.chatId}`, {
            method: "POST",
            body: JSON.stringify({
                message: msg
            }),
            headers: { 
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + authCntxt.token 
            }
        });

        const data = await response.json();
        setChat(old => {
            let newVal = {...old};
            newVal.messages.push(data.msg);
            newVal.lastTime = data.msg.createdAt;
            newVal.chatId = old.chatId;
            return newVal;
        });
    }

    return (
        <div id = "chatWindow" className = "w-full hidden relative md:block" style = {{ "height": "calc(100vh - 92px)" }}>   
            {
                chatId &&
                <div className = "border border-gray-200 bg-white shadow p-2 px-3 flex items-center sticky top-0">
                    <button onClick = { props.screenHandler } className = "md:hidden block">
                        <FontAwesomeIcon className = "text-gray-600 w-6 pr-1 dark:text-gray-300" icon = { faArrowLeft }></FontAwesomeIcon> 
                    </button>
                    <img src = "/images/avatar.png" className = "rounded-full col-span-1 h-12 w-12" alt = "c" />
                    <div className = "pl-2 font-semibold">
                        <span>{ props.chat.userName }</span>
                    </div>
                </div>
            } 
            {   chatId && 
                <MessageContainer chatDetails = { props.chat } setChat = { setChat } />
            } 
            {   chatId && 
                <div className = "absolute bottom-0 left-0 w-full">
                    <div className = "relative w-full">
                        <div className = "relative">
                            <input 
                                type = "text"
                                id = "msgBox"
                                className = "outline-none focus:shadow-md border-2 rounded-lg w-full p-3 leading-tight border-gray-300 dark:border-gray-600 bg-gray-50 focus:outline-none focus:bg-white text-gray-700 pr-16 js-password duration-300 dark:bg-gray-700 text-sm dark:text-gray-200" 
                                placeholder = "Enter your Message."
                                onKeyPress = {(e) => { if(e.key === "Enter") { messageHandler() } }}
                                autoFocus
                                autoComplete="off"
                            />

                            <div className = "absolute cursor-pointer inset-y-0 right-0 px-3 flex items-center text-sm border-l-0 leading-5 border-gray-300 dark:bg-gray-700 dark:text-gray-200 border dark:border-gray-600 bg-gray-100">
                                <span> 
                                    <FontAwesomeIcon className = "text-gray-600 w-6 dark:text-gray-300" icon = { faPaperPlane }></FontAwesomeIcon> 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                !chatId && 
                <div className = "flex items-center justify-center p-2 border-t border-gray-200 overflow-y-scroll h-full">
                    Select A Chat To Begin
                </div>
            }
        </div>
    );
}

export default ChatWindow;