import { FaPlay, FaPause } from "react-icons/fa6";
import { FaVolumeMute, FaVolumeDown } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";

const NEPApplicationVideo = () => {

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

  useEffect(()=> {
    setTimeout(()=> {
     //videoRef?.current.play()
    }, 1000)
  }, [])

  return (
    <div className="nep_application_video">
      <div className="video_">
        <video poster="/ai-form-poster.png" ref={videoRef}>
          <source src="/personal_information.mp4" type="video/mp4"/>
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