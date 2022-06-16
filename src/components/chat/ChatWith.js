const ChatWith = (props) => {
    return (
        <button className = "w-full border-y border-gray-200 p-2 px-3 flex" onClick = { props.onClick }>
            <img src = "./images/avatar.png" className = "rounded-full col-span-1 h-12 w-12" alt = "" />
            <div className = "pl-2">
                <div className = "font-semibold">Vivek Joshi</div>
                <div className = "text-gray-700 text-xs">Send a Message.</div>
            </div>
        </button>
    );
}

export default ChatWith;