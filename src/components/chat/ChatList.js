import { useState, useEffect, useCallback } from "react";
import ChatPulse from "./ChatPulse";
import ChatWith from "./ChatWith";
import EmptyList from "./EmptyList";

const ChatList = props => {
    const ChatCount = [1, 2, 3, 4, 5, 6, 7];
    const [loadingList, setLoadingList] = useState(true);
    let data = [];

    const fetchChatList = useCallback(async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}api/v1/chat/getChatList/62a0bd960a46f7c157ee5072`);
        console.log("Got Response");
        data = await response.json();
        console.log(data);
        setLoadingList(false);
    }, []);

    useEffect(() => {
        fetchChatList();
    }, [fetchChatList]);

    return (
        <div id = "chatList" className = "md:block md:w-96 w-full duration-300 bg-gray-50 overflow-y-scroll" style = {{ "height": "calc(100vh - 95px)" }}>
            { !loadingList ? 
                (
                    data.length === 0 ? 
                    <EmptyList /> :
                    data.map(() => {
                        console.log("Stopped loading");
                        return <ChatWith onClick = { props.screenHandler }></ChatWith>
                    })
                ) : 
                (loadingList && ChatCount.map(chat => <ChatPulse key = { chat } />))
            }
        </div>
    );
}

export default ChatList;