import ReceivedMsg from "./ReceivedMsg";
import SentMsg from "./SentMsg";

const MessageContainer = (props) => {
    const user_id = "1";
    return (
        <div id = "messages" className = "p-2 overflow-y-scroll flex flex-col" style = {{ "height": "calc(100vh - 200px)" }}> 
            {
                props.chat.map((msg, it) => {
                    return msg.from_id === user_id 
                        ? <SentMsg className = { it === 0 ? "mt-auto" : "" } key = { msg._id }> { msg.message } </SentMsg>
                        : <ReceivedMsg className = { it === 0 ? "mt-auto" : "" } key = { msg._id }> { msg.message }</ReceivedMsg>
                })
            }
            <div style = {{ float:"left", clear: "both" }} id = "messagesEnd">
            </div>
        </div>
    );
}

export default MessageContainer;