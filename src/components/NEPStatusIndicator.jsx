import { useAtom } from "jotai"
import { statusIndicatorContext } from "../App"
import { FiCheckCircle } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { useEffect } from "react";
import {motion} from 'framer-motion'

const NEPStatusIndicator = () => {

    const [status, setStatus] = useAtom(statusIndicatorContext)

    useEffect(()=> {
        setTimeout(()=> {
            setStatus({
                ...status,
                show: false
            })
        }, 3000)
    }, [])

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: [0.5, 1, 0.89, 1] }}
            className={`nep_status_indicator ${status.type}`}
        >
            <div className="icon_">
                {
                    status.type == 'success' ?
                    <FiCheckCircle />
                    :
                    status.type == 'danger' ?
                    <IoCloseCircleOutline />
                    :
                    <FiInfo />
                }
            </div>
            <div className="text_">
                <h4>{status.title}</h4>
                <p>{status.message}</p>
            </div>

            <button className="close_" type="button" onClick={()=> setStatus({...status, show: false})}>
                <IoClose />
            </button>
        </motion.div>
    )
}

export default NEPStatusIndicator