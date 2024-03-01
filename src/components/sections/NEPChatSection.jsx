import { useEffect, useRef, useState } from "react";
import NEPInfoSection from "./NEPInfoSection"
import { FaMicrophone } from "react-icons/fa";
import { LuCamera, LuCameraOff, LuMic, LuMicOff } from "react-icons/lu";
import { FaPlay, FaPause } from "react-icons/fa6";
import { FaVolumeMute, FaVolumeDown } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import NEPApplicationSteps from "../NEPApplicationSteps";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { LuRefreshCcw } from "react-icons/lu";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import ChatMessage, { ChatMessageLoader } from "../chats/ChatMessage";
import getQuestions, { getTime } from "../../store/questions";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

let audioRecorder
let recoredAudio
let chatIndex = 0

const questionsContext = atom(null)
const messageLoaderContext = atom(false)
const videoURLContext = atom(null)

const ChatPermision = ({errorHandler, onPermissionCheck})=> {
    return (
        <NEPInfoSection>

            

            {
                errorHandler.status ?
                <>
                <div className="info_icon_group">
                    <div className="info_button">
                        <LuCameraOff />
                    </div>
                    <div className="info_button">
                        <LuMicOff />
                    </div>
                </div>
                <h3> <span>{errorHandler.title[0]}</span> {errorHandler.title[1]}</h3>
                <p>{errorHandler.message}</p>

                    {
                        errorHandler.statusCode == 'permissionDenied' &&
                        <div className="nep_btn_group center_">
                            <button type="button" className="nep_btn" onClick={onPermissionCheck}>
                                <span>Try Again</span>
                                <i><LuRefreshCcw /></i> 
                            </button>
                        </div>
                    }

                </>
                :
                <>
                    <div className="info_icon_group">
                        <div className="info_button">
                            <LuCamera />
                        </div>
                        <div className="info_button">
                            <LuMic />
                        </div>
                    </div>

                    <h3> <span>Microphone</span> and <span>Camera</span> Permission Required !</h3>
                    <p>To start the interview please grant permission to use your microphone and webcam. Click '<strong>Allow</strong>' when prompted to enable seamless communication during your interview. Thank you for your cooperation!</p>

                    <div className="alert_message">
                        <p>Please be informed that this online interview will be recorded for evaluation purposes. Your <strong>video</strong> and <strong>voice</strong> will be captured to ensure a fair assessment. Thank you for your understanding.</p>
                    </div>

                    <div className="nep_btn_group center_">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" xmlSpace="preserve">
                            <path opacity="0.2" fill="#fe6723" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                            <path fill="#fe6723" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                                C22.32,8.481,24.301,9.057,26.013,10.047z">
                                <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 20 20"
                                to="360 20 20"
                                dur="0.5s"
                                repeatCount="indefinite"/>
                            </path>
                        </svg>
                    </div>
                </>
            }

            

        </NEPInfoSection>
    )
}

const AIVideo = ()=> {

    const [isMute, setIsMute] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const videoRef = useRef(null)

    const videoURL = useAtomValue(videoURLContext)

    
    const playFn = ()=> {
        isPause ? videoRef.current.pause() : videoRef.current.play()
        setIsPause(!isPause)
    }

    const muteFn = ()=> {
        setIsMute(!isMute)
        videoRef.current.muted = !videoRef.current.muted
    }

    const restartFn = ()=> {
        videoRef.current.currentTime = 0;
        setIsPause(true)
        setIsMute(false)
        videoRef.current.muted = false
        videoRef.current.play()
    }

    const initVideo = async ()=> {
        try{
            await videoRef.current.load()
            videoRef.current.currentTime = 0;

            setTimeout(()=> {
                videoRef.current.play()
                setIsPause(true)
            }, 700)

            videoRef.current.onended = ()=> {
                setIsPause(false)
            };
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        if(videoURL){
            initVideo()
        }
    },  [videoURL])

    return (
        <div className="ai_video">
            <video poster="/ai-chat-poster.png" ref={videoRef}>
                <source src={videoURL} type="video/mp4"/>
            </video>

            <div className="ai_user_controls">
                <div className="ai_user_video">
                
                </div>

                <div className="ai_user_record_message">
                    <span></span>
                    <p>Recording</p>
                </div>
            </div>

            <div className="ai_video_controls">
                <div className="wrapper_">
                    <button type="button" onClick={playFn}>
                        {
                            isPause ? <FaPause /> : <FaPlay />
                        }
                    </button>
                    <button type="button" onClick={muteFn}>
                        {
                            isMute ? <FaVolumeMute /> : <FaVolumeDown />
                        }
                    </button>
                    <button type="button" onClick={restartFn}>
                        <RiRefreshLine />
                    </button>
                    <button type="button" className={`end_`}>
                        End
                    </button>
                </div>
            </div>
        </div>
    )
}

const ChatInput = ({audioStream})=> {

    const [isVoiceRecording, setIsVoiceRecording] = useState(false);
    const [isVoiceRecodingFinished, setIsVoiceRecordingFinished] = useState(false)
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [audioFile, setAudioFile] = useState({})
    const [time, setTime] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false)
    const [inputText, setInputText] = useState('')

    const inputRef = useRef(null)
    const audioRef = useRef(null)
    const messageSoundRef = useRef(null)
    const messageLoadingRef = useRef(null)
    const messageSentgRef = useRef(null)

    const waveAnimControls = useAnimationControls()

    const [questionsArray, setQuestionsArray] = useAtom(questionsContext)
    const setMessageLoader = useSetAtom(messageLoaderContext)
    const setVideoURL = useSetAtom(videoURLContext)
    

    const seconds = Math.floor((time % 6000) / 100);
    const minutes = Math.floor((time % 360000) / 6000);

    const generateAudio = ()=> {
        const blob = new Blob(recoredAudio, {type: 'audio/wav'});
        const url = window.URL.createObjectURL(blob);

        setAudioFile({
            url: url
        })
    }

    const startRecordingFn = ()=> {
        setIsVoiceRecording(true)
        recoredAudio = []
        audioRecorder = new MediaRecorder(audioStream); 

        audioRecorder.ondataavailable = (event)=> {
            if (event.data && event.data.size > 0) {
                recoredAudio.push(event.data);
            }   
        }
        audioRecorder.start();

        audioRecorder.onstop = (event)=> {
            generateAudio()
        }
    }

    const stopRecordingFn = ()=> {
        setIsVoiceRecording(false)
        setIsVoiceRecordingFinished(true)
        audioRecorder.stop();
    }

    const deleteAudioFn = ()=> {
        console.log('Audio deleted')
        setIsVoiceRecordingFinished(false)
    }

    const playAudioFn = ()=> {
        setIsAudioPlaying(!isAudioPlaying)

        audioRef.current.load()

        // audioRef.current.play()
        
        // audioRef.current.addEventListener('durationchanged', (event)=> {
        //     console.log(event)
        // })
        //     waveAnimControls.start({
        //         clipPath: 'polygon(0 0, 100% 0, 100% 99%, 0 100%)',
        //         transition: { duration: event.target.duration },
        //     })
    }

    const getAIQuestion = async (index)=> {
        try{    

            setIsDisabled(true)

            setMessageLoader(true)

            messageLoadingRef?.current.play()

            const res = await getQuestions(index);
            
            if(res){

                const data = {
                    type: 'ai',
                    text: res.data.text,
                    time: getTime(new Date())
                }

                setTimeout(()=> {

                    if(questionsArray){
                        setQuestionsArray([
                            ...questionsArray,
                            data
                        ])
                    }else{
                        setQuestionsArray([data])
                    }

                    
                    setVideoURL(res.data.url)
                    setMessageLoader(false)
                    setIsDisabled(false)

                    chatIndex++
                    messageLoadingRef?.current.pause()
                    messageSoundRef?.current.play()

                    messageLoadingRef.current.currentTime = 0

                }, 2500)
            }

        }catch(error){
            console.log(error)
        }
    }

    const sendMessageFn = ()=> {

        if(inputText.length > 0 || audioFile.url){

            setIsDisabled(true)
            setIsVoiceRecordingFinished(false)

            const data = {
                type: 'user',
                text: inputText,
                time: getTime(new Date())
            }

            setQuestionsArray([
                ...questionsArray,
                data
            ])

            setInputText('')
            setAudioFile({...audioFile, url: null})

            messageSentgRef?.current.play()

            setTimeout(()=> {
                getAIQuestion(chatIndex)
            }, 1000)

            console.log('Message Sent!')
        }else{
            console.log('No messages to send !')
        }

    }



    useEffect(()=> {

        let intervalId;

        if(isVoiceRecording){
            intervalId = setInterval(() => setTime(time + 1), 10);
        }else{
            setTime(0)
        }

        return () => clearInterval(intervalId);

    }, [isVoiceRecording, time])

    useEffect(()=> {
        getAIQuestion(chatIndex);
    }, [])

    return (
        <div className={`nep_chat_input ${isVoiceRecording ? 'recording_' : ''} ${isVoiceRecodingFinished ? 'recording_finished' : ''}`}>

        <audio ref={messageSoundRef}>
            <source src="/message-sent-sound.wav" />
        </audio>

        <audio ref={messageLoadingRef} loop>
            <source src="/message-typing.wav" />
        </audio>

        <audio ref={messageSentgRef}>
            <source src="/message-sound.wav" />
        </audio>

            <div className="audio_record">

                {
                    isVoiceRecodingFinished ?
                        <div className="chat_btn_group">
                            <button className="chat_btn audio_delete" onClick={deleteAudioFn}>
                                <RiDeleteBinLine />
                            </button>

                            <div className={`chat_audio_wave ${isAudioPlaying ? 'playing_' : ''}`}>

                                <audio ref={audioRef} preload="auto"><source src={audioFile.url} /></audio>

                                <span></span>
                                <motion.span
                                animate={waveAnimControls}
                                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                                ></motion.span>
                            </div>

                            <button className="chat_btn audio_" onClick={playAudioFn}>
                                {
                                    isAudioPlaying ? <FaPause /> : <FaPlay />
                                }
                            </button>
                        </div>
                    :

                    <>
                        {
                            isVoiceRecording ?
                            <button className="chat_btn audio_" onClick={stopRecordingFn} disabled={isDisabled}>
                                <FaMicrophone />
                            </button>
                            :
                            <button className="chat_btn audio_" onClick={startRecordingFn} disabled={isDisabled}>
                                <FaMicrophone />
                            </button>
                        }
                    </>
                }
                

                <div className="recording_time">
                    <span>{minutes.toString().padStart(2, "0")}</span>
                    <span>{seconds.toString().padStart(2, "0")}</span>
                </div>
            </div>

            <div className="input_">
                <input 
                    type="text" 
                    placeholder="Type or Record..." 
                    disabled={isVoiceRecording || isDisabled}
                    ref={inputRef}
                    value={inputText}
                    onChange={(e)=> setInputText(e.target.value)}
                />
            </div>

            <div className="send_btn">
                <button className="chat_btn" onClick={sendMessageFn} disabled={isDisabled}>
                    <BsFillSendFill />
                </button>
            </div>
        </div>
    )
}

const ChatBox = ({height})=> {

    const questionsArray = useAtomValue(questionsContext)
    const messageLoader = useAtomValue(messageLoaderContext)
    const chatBoxRef = useRef(null)

    useEffect(()=> {
        chatBoxRef?.current.scrollTo(0, height)
    }, [questionsArray])

    return (
        <div className="nep_chat_chatbox" style={{'--chat-area-height': height + 'px'}}>


            <div className="profile_info">

                <div className="pic_">
                    <img src="/ai-chat-poster.png" />
                </div>

                <div className="name_">
                    <h4>AI Assistance</h4>
                    <p>Active Now</p>
                </div>

                <button className="nep_icon_btn sm_ info_">
                    <i><FiMoreVertical /></i>
                </button>

                
            </div>

            <div className="chat_box" ref={chatBoxRef}>

               <div className="chat_box_inner">
                    <AnimatePresence>
                {
                    questionsArray &&
                    questionsArray.map((item, index)=> (
                        <ChatMessage 
                            userType={item.type}
                            message={item.text}
                            time={item.time}
                            key={`user_message_${index}`}
                        />
                    ))

                    
                }
                {
                    messageLoader &&
                    <ChatMessageLoader />
                }
                    </AnimatePresence>
               </div>

            </div>

        </div>
    )
}

const ChatArea = ({audioStream})=> {

    const chatVideoRef = useRef(null)
    const [wrapperHeight, setWrapperHeight] = useState(0)

    useEffect(()=> {
        setWrapperHeight(chatVideoRef.current.offsetHeight)
    }, [])

    return (
       <>
        <div className="nep_chat_area">
            
            <div className="nep_chat_aivideo" ref={chatVideoRef}>
                <AIVideo />
                <ChatInput audioStream={audioStream}/>
            </div>
            <ChatBox height={wrapperHeight}/>

        </div>
       </>
    )
}

const ChatWrapper = ({audioStream})=> {
    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.025 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        >
            <div className="nep_chat_title">
                <h3><span>NEP 4.0</span> AI Interview</h3>
            </div>
            <NEPApplicationSteps />
            <ChatArea audioStream={audioStream}/>
        </motion.div>
    )
}

const NEPChatSection = () => {

    const [isPermissionGranted, setIsPermissionGranted] = useState(false)
    const [audioStream, setAudioStream] = useState(null)
    const [permissionError, setPermissionError] = useState({
        status: false,
        title: 'Access Declined:',
        message: ''
    })
    const usermediaPrefix = !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)


    const getPermission = ()=> {
        if(usermediaPrefix){

            const constraints = {
                audio: true,
                video: false
            };

            navigator.mediaDevices.getUserMedia(constraints)
            .then((stream)=> {
                setAudioStream(stream)
                setTimeout(()=> setIsPermissionGranted(true), 1000)

                stream.onremovetrack = ()=> {
                    console.log('Removed')
                }

            }).catch((error)=> {

                if(error.message == 'Requested device not found'){

                    setPermissionError({
                        status: true,
                        statusCode: 'deviceNoFound',
                        title: ['Access Declined:', 'Requested device not found'],
                        message: 'Apologies, but it seems the requested device is not found. Please check your connections or ensure the device is properly connected and try again. Thank you for your patience.'
                    })

                }else if(error.message == 'Permission denied'){

                    setPermissionError({
                        status: true,
                        statusCode: 'permissionDenied',
                        title: ['Permission Denied:', 'Permission has been denied'],
                        message: "Unfortunately, permission has been denied for the requested action. Kindly review and adjust your settings to enable the microphone and camera permissions. Select 'Always Allow' to use your microphone and camera. Thank you for your cooperation and understanding."
                    })

                }

            })

        }else{
            alert('getUserMedia() is not supported in your browser')
        }
    }

    useEffect(()=> {
        getPermission();
    }, [])


  return (
    <div className="nep_chat">
       <AnimatePresence>
            {
                isPermissionGranted ?
                <ChatWrapper audioStream={audioStream} />
                :
                <ChatPermision errorHandler={permissionError} onPermissionCheck={()=> getPermission()}/>
            }
       </AnimatePresence> 
    </div>
  )
}

export default NEPChatSection