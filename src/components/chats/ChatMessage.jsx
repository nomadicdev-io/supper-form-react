import { motion } from "framer-motion";

export const ChatMessageLoader = ()=> {
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0.25 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.25 }}
        transition={{ duration: 0.2 }}
        style={{ originX: 0 }}
        className="chat_item">
            <div className="message_">
                <div className="message_loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </motion.div>
    )
}

const ChatMessage = ({userType, message, time}) => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.25 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.25 }}
    transition={{ duration: 0.2, delay: 0.2 }}
        className={`chat_item ${userType ? userType: ''}`}
        style={{ originX: userType == 'ai' ? 0 : 1 }}
    >

        <div className="message_">{message}</div>
        <div className="time_">{time}</div>

    </motion.div>
  )
}

export default ChatMessage