import { LuSave } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const NEPFormAction = () => {
  return (
    <div className="nep_stepper_actionbar">
        <div className="nep_btn_group start_">
            <button className="nep_btn secondary_" type="button">
                <i><FaArrowLeft /></i>
                <span>Back</span>
            </button>
            <button className="nep_btn outline_" type="button">
                <span>Save Draft</span>
                <i><LuSave /></i>
            </button>
        </div>

        <div className="nep_btn_group start_">
            <button className="nep_btn" type="submit">
                <span>Next</span>
                <i><FaArrowRight /></i>
            </button>
            <button className="nep_btn success_" type="submit">
                <span>Submit Form</span>
                <i><FaCheck /></i>
            </button>
        </div>
    </div>
  )
}

export default NEPFormAction