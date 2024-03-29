import { FaPlay, FaPause } from "react-icons/fa6";
import { FaVolumeMute, FaVolumeDown } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";
import { applicationFormContext } from "../../App";

const NEPApplicationVideo = ({videoUrl}) => {

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
    videoRef.current.play()
  }

  const initVideo = async ()=> {
    try{
      await videoRef.current.load()
      videoRef.current.currentTime = 0;
      
      setTimeout(()=> {
        videoRef.current.play()
        setIsPause(true)
      }, 100)

      videoRef.current.onended = ()=> {
        setIsPause(false)
      };

    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=> {
    initVideo()
  }, [videoUrl])

  return (
    <div className="nep_application_video">
      <div className="video_">
        <video poster="/ai-form-poster.png" ref={videoRef}>
          <source src={videoUrl} type="video/mp4"/>
        </video>

        <div className="details_">
            <button className={isPause ? 'active_' : ''} onClick={()=> playFn()}>
              <i>
                {
                  isPause ? <FaPause /> : <FaPlay />
                }
              </i>
            </button>
            <button onClick={()=> muteFn()}>
              <i>
                {
                  isMute ? <FaVolumeDown /> : <FaVolumeMute />
                }
              </i>
            </button>
            <button onClick={restartFn}>
              <i><RiRefreshLine /></i>
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default NEPApplicationVideo