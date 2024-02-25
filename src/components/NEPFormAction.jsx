import { LuSave } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useAtomValue } from "jotai";
import { applicationFormContext } from "../App";

const NEPFormAction = ({onNext, onBack, onDraft, onFinish}) => {

    const formContext = useAtomValue(applicationFormContext)

  return (
    <div className="nep_stepper_actionbar">
        <div className="nep_btn_group start_">
            <button className="nep_btn secondary_" type="button" onClick={onDraft}>
                <span>Save Draft</span>
                <i><LuSave /></i>
            </button>
        </div>

        <div className="nep_btn_group start_">
            {
                formContext.activeIndex > 1 &&
                <button className="nep_btn dark_" type="button" onClick={onBack}>
                    <i><FaArrowLeft /></i>
                    <span>Back</span>
                </button>
            }
            
            {
                formContext.activeIndex == formContext.formCount ?
                <button className="nep_btn success_" type="submit" onClick={onFinish}>
                    <span>Submit Form</span>
                    <i><FaCheck /></i>
                </button>
                :
                <button className="nep_btn" type="submit" onClick={onNext}>
                    <span>Next</span>
                    <i><FaArrowRight /></i>
                </button>
            }
        </div>
    </div>
  )
}

export default NEPFormAction