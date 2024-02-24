import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { FaMicrophone } from "react-icons/fa6"
import { FiSend } from "react-icons/fi";
import { chatsArray, micPermissionStatus } from "../App";
import { MdMoreHoriz } from "react-icons/md";
import questions from "../store/questions";

const chatHistory = []

const NEPQuestionVideo = ({ref})=> {
    return (
        <div className="nep_questions_video">
            <video poster="/ai-image-poster.png">
                <source ref={ref} src="" type="video/webm" />
            </video>
        </div>
    )
}

const NEPQuestionsChatbox = ({ children, height, chatIndex})=> {
    
    const chatBoxRef = useRef(null)
    const chatUserImage = {
        ai: '/ai-image-poster.png',
        user: '/user-image.jpg'
    }
    const chats = useAtomValue(chatsArray)

    const getTime = (value)=> {
        const d = new Date(value)
        const h = d.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
        return h;
    }

    useEffect(()=> {
        chatBoxRef?.current.scrollTo(0, height)
    }, [height])

    return (
        <div className="nep_questions_chatbox" style={{'--nep-chatbox-height':  height + 'px'}}>
            <div className="nep_questions_chatbox_title">
                <div className="profile_">
                    <div className="picture_">
                        <img src="/ai-image-poster.png" title="AI" alt="AI Assistant" />
                    </div>
                    <div className="name_">
                        <h4>NEP AI Assistant</h4>
                        <p>Active Now</p>
                    </div>
                </div>
                <div className="info_">
                    <button><MdMoreHoriz /></button>
                </div>
            </div>

            <div className="nep_questions_chatbox_display" ref={chatBoxRef}>
                <div className="chat_listing">

                    {
                        chats.length != 0 &&
                        
                        chats.map((item, index)=> (
                                <div className={`chat_user ${item.userType == 'user' ? 'current_user' : ''}`} key={`in_chat_091${index}`}> 
                                <div className="chat_user_image">
                                    <img src={chatUserImage[item.userType]} title="AI Assistant"/>
                                </div>
                               
                                <div className="chat_user_message">
                                    <div className="messages_">
                                        <div className="text_"><p>{item.message}</p></div>
                                    </div>
                                    <div className="time_"><span>{getTime(item.time)}</span></div> 
                                </div> 
                            </div>
                        ))
    
                    }

                </div>
            </div>

            {children}
        </div>
    )
}

const NEPQuesitonChatinput = ({sendMessage, inputValue, value, recordVoice, isListening})=> {

    return (
        <div className="nep_questions_chatinput">

            <button 
                className="cht_btn mic_" 
                type="button" 
                data-listening={isListening}
                onClick={recordVoice}
            >
                <i><FaMicrophone /></i>
            </button>

            <textarea 
                id="chatinput-box"
                placeholder="Type or Record..." 
                value={value} 
                onChange={(el)=> inputValue(el.target.value)}
            />
            
            <button 
                className="cht_btn send_" 
                type="button"
                onClick={sendMessage}
            >
                <i><FiSend /></i>
            </button>
            
        </div>
    )
}

const NEPQuestionsArea = () => {

    const videoRef = useRef(null)
    const videoPlayer = useRef(null)
    const [videHeight, setVideoHeight] = useState(0)
    const [chats, setChats] = useAtom(chatsArray)
    const [inputText, setInputText] = useState('')
    const [isListening, setIsListening] = useState(false)
    const [micPermssion, setMicPermission] = useAtom(micPermissionStatus)
    const [chatIndex, setChatIndex] = useState(0)

    const speechRecognition = window.speechRegonition || window.webkitSpeechRecognition;
    const recognition = new speechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false
    recognition.continuous = true

    recognition.onresult = (event)=> {
        setInputText(inputText + event.results[event.resultIndex][0].transcript)
    }

    recognition.onend = (event)=> {
        setIsListening(false)
    }

    recognition.onerror = (event)=> {
        setIsListening(false)
        console.log(event)
    }

    const checkMicPermission = async ()=> {

        if(typeof micPermssion == 'boolean' ) return;

        try {
            if (!!navigator?.permissions) {
                const status = await navigator.permissions?.query({ name: 'microphone' })
                status.state == 'granted' || status.state == 'prompt' ? setMicPermission(true) : setMicPermission(false)
            }
        }catch(error){
            console.log(error)
        }
    }

    const speechFn = ()=> {
        
        let checkListening = !isListening;
        
        if(checkListening){
            recognition.start();
        }else{
            recognition.stop();
        }

        setIsListening(checkListening)

    }

    const sendMessage = ()=> {

        if(!inputText.length) return

        setChats([...chats, {userType: 'user',message: inputText,time: new Date()}])

        setChatIndex(chatIndex + 1)
        setInputText('')
        
    }

    const settingInitialChat = ()=> {
        if(chats.length) return;
        setChatIndex(0)
    }

    useEffect(()=> {
        setVideoHeight(videoRef.current.offsetHeight);
        checkMicPermission();
        settingInitialChat()
    }, [])

    useEffect(()=> {
        if(chatIndex < questions.data.length){
            console.log(videoPlayer.current)
            // videoPlayer?.current.load();
            setTimeout(()=> {
                setChats([...chats, {userType: 'ai',message: questions.data[chatIndex].text,time: new Date()}])
            }, 500)
        }
    }, [chatIndex])

  return (
    <div className="nep_questions_wrapper">
        <div className="nep_questions_inputwrapper" ref={videoRef}>
            <NEPQuestionVideo ref={videoPlayer}/>
            <NEPQuestionVideo ref={videoPlayer}/>
        </div>
        <NEPQuestionsChatbox height={videHeight} chatIndex={chatIndex}>
            <NEPQuesitonChatinput 
                sendMessage={()=> sendMessage()} 
                inputValue={setInputText} 
                value={inputText}
                recordVoice={()=> speechFn()}
                isListening={isListening}
            />
        </NEPQuestionsChatbox>
    </div>
  )
}

export default NEPQuestionsArea