import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegFileLines } from "react-icons/fa6";
import NEPSectionBG from "../NEPSectionBG";
import {motion} from 'framer-motion'

const NEPInfoSection = ({children, imageUrl, primaryButton, secondaryButton}) => {
    
    const navigate = useNavigate();

    return (
        <motion.div 
        className="nep_application_formwrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: [0.5, 1, 0.89, 1], delay: 0.3 }}
        >
            <NEPSectionBG />

            <div className="nep_application_start">
               
                {
                    imageUrl &&
                    <div className="icon_">
                        <img src={imageUrl} />
                    </div>
                }
                {children}

                {
                    primaryButton  || secondaryButton &&
                    <div className="nep_btn_group center_">
                        {
                            secondaryButton.length &&
                            <button type="button" className="nep_btn dark_" onClick={()=> navigate(secondaryButton.path)}>
                                <i><FaArrowLeft /></i>
                                <span>{secondaryButton.title}</span>
                            </button>
                        }
                        {
                            primaryButton.length &&
                            <button type="button" className="nep_btn" onClick={()=> navigate(primaryButton.path)}>
                                <span>{primaryButton.title}</span>
                                <i><FaRegFileLines /></i> 
                            </button>
                        }
                    </div>
                }

            </div>

        </motion.div>
    )
}

export default NEPInfoSection