import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import NEPApplicationSteps from "../NEPApplicationSteps"
import {motion} from 'framer-motion'

const ActionBar = ({onStepClick})=> {
    return (
        <div className="nep_btn_group end_">
            <button type="button" className="nep_btn dark_" onClick={onStepClick}>
                <i><FiArrowLeft /></i>
                <span>Back</span>
            </button>
            <button type="button" className="nep_btn" onClick={onStepClick}>
                <span>Next</span>
                <i><FiArrowRight /></i>
            </button>
        </div>
    )
}

const FirstStep = ()=> {
    return (
        <motion.div 
            className="nep_interview_info_grid"
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            <div className="image_holder">
                <div className="holder_">
                    <div className="img_">
                        <img src="/interview-info.svg" />
                    </div>
                </div>

            </div>
            <div className="content_">
                <h3>Hi <strong>Alan Sha Salim</strong>, the next part of the application process is an AI interview.</h3>
                <p>These questions will gauge your thinking about the transformative projects you have worked on during your career.</p>
                <p>Please take some time to consider the questions on the next page before proceeding with the AI interview. Your answers will be judged on how you demonstrate your strategic thinking, adaptability to challenges, pro-active mindset, perseverance, future-ready focus, and ability to empathize with others. </p>
            </div>
        </motion.div>
    )
}

const SecondeStep = ()=> {
    return (
        <motion.div 
            className="nep_interview_info_grid"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            <div className="image_holder">
                <div className="holder_">
                    <div className="img_">
                        <img src="/interview-info.svg" />
                    </div>
                </div>
            </div>

            <div className="content_">
                <h3>Interview <strong>Questions</strong></h3>
                <ul>
                    <li>Please describe the transformative project you worked on, its impact and your exact role.</li>
                    <li>Please provide up to 3 examples of important disruptive innovations and mega-trends in tech, socio and geo-political fields and their implications for your organization.</li>
                    <li>Please provide one specific example of how you fostered and managed creativity and innovation in your team.</li>
                    <li>Can you share one specific example of how you successfully managed and implemented strategic change in your organization or sector?</li>
                </ul>
            </div>
        </motion.div>
    )
}

const NEPInterviewIntroSection = () => {

    const onStepClick =()=> {

    }

  return (
    <div className="nep_interview_steps">

        <NEPApplicationSteps />

        <FirstStep />
        <SecondeStep />
        <ActionBar onStepClick={onStepClick}/>


    </div>
  )
}

export default NEPInterviewIntroSection