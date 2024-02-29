import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import NEPApplicationSteps from "../NEPApplicationSteps"
import {AnimatePresence, motion} from 'framer-motion'
import { useState } from "react"

const ActionBar = ({onStepClick, onBackClick, activeStep})=> {
    return (
        <div className="nep_btn_group end_">
            {
                activeStep > 1 &&
                <button type="button" className="nep_btn dark_" onClick={onBackClick}>
                    <i><FiArrowLeft /></i>
                    <span>Back</span>
                </button>
            }
            <button type="button" className={`nep_btn ${ activeStep == 2  ? 'success_' : ''}`} onClick={onStepClick}>
                <span>{activeStep == 2 ? 'Start Interview' : 'Next'}</span>
                <i><FiArrowRight /></i>
            </button>


        </div>
    )
}

const FirstStep = ()=> {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.025 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="content_">
                <h3>Hi <strong>Alan Sha Salim</strong>, the next part of the application process is an AI interview.</h3>
                <p>These questions will gauge your thinking about the transformative projects you have worked on during your career.</p>
                <p>Please take some time to consider the questions on the next page before proceeding with the AI interview. Your answers will be judged on how you demonstrate your strategic thinking, adaptability to challenges, pro-active mindset, perseverance, future-ready focus, and ability to empathize with others. </p>
        </motion.div>
    )
}

const SecondeStep = ()=> {
    return (

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.025 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="content_">
            <h3>Interview <strong>Questions</strong></h3>
                <ul>
                    <li>Please describe the transformative project you worked on, its impact and your exact role.</li>
                    <li>Please provide up to 3 examples of important disruptive innovations and mega-trends in tech, socio and geo-political fields and their implications for your organization.</li>
                    <li>Please provide one specific example of how you fostered and managed creativity and innovation in your team.</li>
                    <li>Can you share one specific example of how you successfully managed and implemented strategic change in your organization or sector?</li>
                </ul>
        </motion.div>
    )
}

const NEPInterviewIntroSection = ({isFinished}) => {

    const [visibleStep, setVisibleStep] = useState(1)

    const onStepClick =()=> {

        if(visibleStep == 2){
            isFinished()
        }else{
            setVisibleStep(visibleStep + 1)
        }

    }

    const onBackClick =()=> {
        setVisibleStep(visibleStep - 1)
    }

  return (
    <div className="nep_interview_steps">

        <NEPApplicationSteps />

        <div className="nep_interview_info_grid">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.025 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="image_holder"
            >
                <div className="holder_">
                    <div className="img_">
                        <img src="/interview.svg" />
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
            {
                visibleStep == 1 && <FirstStep /> || visibleStep == 2 && <SecondeStep /> 
            }
            </AnimatePresence>
            

        </div>

        
        <ActionBar onStepClick={onStepClick} onBackClick={onBackClick} activeStep={visibleStep}/>


    </div>
  )
}

export default NEPInterviewIntroSection