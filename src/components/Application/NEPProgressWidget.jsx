import { useEffect, useState } from "react"
import { MdGraphicEq } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const NEPProgressWidget = ({progress}) => {

  const [svgProgress, setSvgProgress] = useState(progress >= 100 ? 100 : progress)
  const [value, setValue] = useState(Math.ceil(100/8 * progress))

  useEffect(()=> {
    const unit = 239 - (239/8 * progress);
    setSvgProgress(unit)
  }, [progress])

  return (
    <div className={`nep_progresswidget ${value >= 100 ? 'completed_' : ''}`}>
        <div className="circle_">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 81.8 81.8" enableBackground="new 0 0 81.8 81.8" xmlSpace="preserve">
            <circle fill="none" stroke="#231F20" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" cx="40.9" cy="40.9" r="38.4"/>

            {
              progress > 0 &&
              <circle fill="none" stroke="#231F20" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" cx="40.9" cy="40.9" r="38.4" className="progress_stroke" style={{strokeDashoffset: svgProgress+'px'}}/>
            }
            
            </svg>
            {
              value >= 100 ?
              <i><FaCheck /></i>
              :
              <i><MdGraphicEq /></i>
            }
            
        </div>
        <div className="title_">
            <h4>{value >= 100 ? 100 : value}%</h4>
        </div>
    </div>
  )
}

export default NEPProgressWidget