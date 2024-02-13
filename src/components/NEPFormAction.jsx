import { LuSave } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

const NEPFormAction = () => {
  return (
    <div className="nep_stepper_actionbar">
        <div className="nep_btn_group start_">
            <button className="nep_btn secondary_" type="button">
                <span>Back</span>
            </button>
            <button className="nep_btn outline_" type="button">
                <i><LuSave /></i>
                <span>Save Draft</span>
            </button>
        </div>

        <div className="nep_btn_group start_">
            <button className="nep_btn" type="submit">
                <span>Next</span>
                <i><FaArrowRight /></i>
            </button>
        </div>
    </div>
  )
}

export default NEPFormAction