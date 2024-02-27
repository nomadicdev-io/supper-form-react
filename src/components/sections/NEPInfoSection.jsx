import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import NEPSectionBG from "../NEPSectionBG";
import {motion} from 'framer-motion'

const NEPInfoSection = ({children, imageUrl, buttonArray}) => {
    
    const navigate = useNavigate();

    return (
        <motion.div 
        className="nep_application_formwrapper"
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -25, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.5, 1, 0.89, 1], delay: 0.2 }}
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

                    buttonArray &&
                    

                    <div className="nep_btn_group center_">
                        {
                            buttonArray.map((item, index)=> (


                                item.type == 'primary' ?
                                    <button type="button" className="nep_btn" onClick={()=> navigate(item.path)} key={'info_btn_key' + index}>
                                        <span>{item.title}</span>
                                        <i><FiArrowUpRight /></i> 
                                    </button>
                                :
                                    <button type="button" className="nep_btn dark_" onClick={()=> navigate(item.path)} key={'info_btn_key' + index}>
                                        <i><FiArrowLeft /></i>
                                        <span>{item.title}</span>
                                    </button>
                                
                                ))
                        }
                    </div>
                }

            </div>

        </motion.div>
    )
}

export default NEPInfoSection