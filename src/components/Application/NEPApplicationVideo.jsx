import { FaPlay, FaPause } from "react-icons/fa6";
import { FaVolumeMute, FaVolumeDown } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";
import { applicationFormContext } from "../../App";

const NEPApplicationVideo = () => {

  const [isMute, setIsMute] = useState(false)
  const [isPause, setIsPause] = useState(false)
  const videoRef = useRef(null)
  const formContext = useAtomValue(applicationFormContext)

  const playFn = ()=> {
    isPause ? videoRef.current.pause() : videoRef.current.play()
    setIsPause(!isPause)
  }

  const muteFn = ()=> {
    setIsMute(!isMute)
    videoRef.current.muted = !videoRef.current.muted
  }

  useEffect(()=> {
    setTimeout(()=> {
     videoRef?.current.play()
    }, 500)
  }, [])

  useEffect(()=> {
    videoRef?.current.load();
    videoRef?.current.play();
  }, [formContext.activeVideoURL])

  return (
    <div className="nep_application_video">
      <div className="video_">
        <video poster="/ai-form-poster.png" ref={videoRef}>
          <source src={formContext.activeVideoURL} type="video/mp4"/>
        </video>

        <div className="details_">
            <button className={isPause ? 'active_' : ''} onClick={()=> playFn()}>
              <i>
                {
                  isPause ? <FaPause /> : <FaPlay />
                }
              </i>
            </button>
            <button className={isMute ? 'active_' : '' } onClick={()=> muteFn()}>
              <i>
                {
                  isMute ? <FaVolumeDown /> : <FaVolumeMute />
                }
              </i>
            </button>
            <button>
              <i><RiRefreshLine /></i>
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default NEPApplicationVideo