import { useEffect, useState } from "react"

const NEPStepperTabs = ({tabData, activeIndex, tabClick}) => {


    const [progress, setProgress] = useState(0)

    const setProgressData = ()=> {
        const pValue = (100/tabData.length) * (activeIndex + 1)
        setProgress(pValue)
    }

    useEffect(()=> {
        setProgressData()
    }, [activeIndex])

  return (
    <div className="nep_stepper_tab">
        <div className="nep_stepper_tab_content">
            <ul>
                {
                    tabData.map((item, index)=> (
                        <li key={`st_tab_${index}`}>
                            <button 
                            className={`nep_stepper_tab_btn ${activeIndex == index ? 'active_' : undefined}`} 
                            id={`${item.key}_tab_btn`} 
                            onClick={()=> tabClick(index)}>

                                <span>{item.title}</span>

                            </button>
                        </li>
                    ))
                }
            </ul>

            <div className='nep_stepper_tab_progressbar'>
                <span style={{width: progress + '%'}}></span>
            </div>
        </div>
        <div className="nep_stepper_tab_progress">
            <div className='nep_stepper_tab_progress_holder'>
                <span>{progress}%</span>

                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <circle cx="50" cy="50" r="50" />
                        <circle className="c_prograss" cx="50" cy="50" r="50" style={{strokeDasharray: '314px', strokeDashoffset: 314 - (progress * 3.14) + 'px'}}/>
                    </g>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default NEPStepperTabs