import { useEffect, useState } from "react"
import { MdGraphicEq } from "react-icons/md";

const NEPProgressWidget = ({progress}) => {

  const [svgProgress, setSvgProgress] = useState(progress)

  useEffect(()=> {
    const unit = 239 - (239/7 * progress);
    setSvgProgress(unit)
  }, [progress])

  return (
    <div className="nep_progresswidget">
        <div className="circle_">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 81.8 81.8" enableBackground="new 0 0 81.8 81.8" xmlSpace="preserve">
            <circle fill="none" stroke="#231F20" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" cx="40.9" cy="40.9" r="38.4"/>

            {
              progress > 0 &&
              <circle fill="none" stroke="#231F20" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" cx="40.9" cy="40.9" r="38.4" className="progress_stroke" style={{strokeDashoffset: svgProgress+'px'}}/>
            }
            
            </svg>

            <i><MdGraphicEq /></i>
        </div>
        <div className="title_">
            <h4>{Math.ceil(100/7 * progress) > 100 ? 100 : Math.ceil(100/7 * progress)}%</h4>
        </div>
    </div>
  )
}

export default NEPProgressWidget