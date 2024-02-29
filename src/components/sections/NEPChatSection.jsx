import { useEffect, useRef, useState } from "react";
import NEPInfoSection from "./NEPInfoSection"
import { FaMicrophone } from "react-icons/fa";
import { LuCamera, LuCameraOff, LuMic, LuMicOff } from "react-icons/lu";
import { FaPlay, FaPause } from "react-icons/fa6";
import { FaVolumeMute, FaVolumeDown } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";

const ChatPermision = ()=> {
    return (
        <NEPInfoSection>

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
        </NEPInfoSection>
    )
}

const AIVideo = ()=> {

    const [isMute, setIsMute] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const videoRef = useRef(null)

    
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

    useEffect(()=> {
        videoRef.current.currentTime = 0;
        videoRef.current.load()
        videoRef.current.play()
        setIsPause(true)

        videoRef.current.onended = ()=> {
            setIsPause(false)
        };
    }, [])

    return (
        <div className="ai_video">
            <video poster="/ai-chat-poster.png" ref={videoRef}>
                <source src={'https://api-hcms-textract.s3.eu-west-2.amazonaws.com/open/bot/nep/interview/question1.mp4'} type="video/mp4"/>
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

const ChatInput = ()=> {
    return (
        <div className="nep_chat_input">
            <div className="audio_record">
                <button>
                    <FaMicrophone />
                </button>
            </div>
        </div>
    )
}

const ChatBox = ()=> {
    return (
        <div className="nep_chat_chatbox">
            <div className="profile_info">

                <div className="pic_">
                    <img src="/ai-chat-poster.png" />
                </div>
                
            </div>
        </div>
    )
}

const ChatArea = ()=> {
    return (
        <div className="nep_chat_area">

            <div className="nep_chat_aivideo">
                <AIVideo />
                <ChatInput />
            </div>
            <ChatBox />

        </div>
    )
}

const NEPChatSection = () => {
  return (
    <div className="nep_chat">
        <ChatArea />
    </div>
  )
}

export default NEPChatSection