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

    const [isVoiceRecording, setIsVoiceRecording] = useState(false);
    const [isVoiceRecodingFinished, setIsVoiceRecordingFinished] = useState(false)
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [time, setTime] = useState(0);
    const inputRef = useRef(null)

    const seconds = Math.floor((time % 6000) / 100);
    const minutes = Math.floor((time % 360000) / 6000);

    const recordAudioFn = ()=> {
        setIsVoiceRecording(!isVoiceRecording)

        if(isVoiceRecording){
            setIsVoiceRecording(false)
            setIsVoiceRecordingFinished(true)
        }
    }

    const deleteAudioFn = ()=> {
        console.log('Audio deleted')
        setIsVoiceRecordingFinished(false)
    }

    const playAudioFn = ()=> {
        setIsAudioPlaying(!isAudioPlaying)
        console.log('Audio playing')
    }

    const sendMessageFn = ()=> {
        setIsVoiceRecordingFinished(false)
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

    return (
        <div className={`nep_chat_input ${isVoiceRecording ? 'recording_' : ''} ${isVoiceRecodingFinished ? 'recording_finished' : ''}`}>
            <div className="audio_record">

                {
                    isVoiceRecodingFinished ?
                        <div className="chat_btn_group">
                            <button className="chat_btn audio_delete" onClick={deleteAudioFn}>
                                <RiDeleteBinLine />
                            </button>

                            <div className={`chat_audio_wave ${isAudioPlaying ? 'playing_' : ''}`}>
                                <span></span>
                                <span></span>
                            </div>

                            <button className="chat_btn audio_" onClick={playAudioFn}>
                                {
                                    isAudioPlaying ? <FaPause /> : <FaPlay />
                                }
                            </button>
                        </div>
                    :

                    <button className="chat_btn audio_" onClick={recordAudioFn}>
                        <FaMicrophone />
                    </button>
                }
                

                <div className="recording_time">
                    <span>{minutes.toString().padStart(2, "0")}</span>
                    <span>{seconds.toString().padStart(2, "0")}</span>
                </div>
            </div>

            <div className="input_">
                <input type="text" placeholder="Type or Record..." disabled={isVoiceRecording} ref={inputRef}/>
            </div>

            <div className="send_btn">
                <button className="chat_btn" onClick={sendMessageFn}>
                    <BsFillSendFill />
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

                <div className="name_">
                    <h4>AI Assistance</h4>
                    <p>Active Now</p>
                </div>

                <button className="nep_icon_btn sm_ info_">
                    <i><FiMoreVertical /></i>
                </button>

                
            </div>

            <div className="chat_box">
                <div className="chat_item">

                    <div className="message_">
                        Please describe the transformative project you worked on, its impact and your exact role.
                    </div>
                    <div className="time_">Tue, 9:39am</div>

                </div>

                <div className="chat_item user_">

                    <div className="message_">
                        Please describe the transformative project you worked on, its impact and your exact role.
                    </div>
                    <div className="time_">Tue, 9:39am</div>

                </div>

            </div>

        </div>
    )
}

const ChatArea = ()=> {
    return (
       <>
        <div className="nep_chat_area">
            
            <div className="nep_chat_aivideo">
                <AIVideo />
                <ChatInput />
            </div>
            <ChatBox />

        </div>
       </>
    )
}

const NEPChatSection = () => {
  return (
    <div className="nep_chat">
        <div className="nep_chat_title">
            <h3><span>NEP 4.0</span> AI Interview</h3>
        </div>
        <NEPApplicationSteps />
        <ChatArea />
    </div>
  )
}

export default NEPChatSection