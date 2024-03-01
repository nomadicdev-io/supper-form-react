export const ChatMessageLoader = ()=> {
    return (
        <div className="chat_item">
            <div className="message_">
                <div className="message_loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

const ChatMessage = ({userType, message, time}) => {
  return (
    <div className={`chat_item ${userType ? userType: ''}`}>

        <div className="message_">{message}</div>
        <div className="time_">{time}</div>

    </div>
  )
}

export default ChatMessage