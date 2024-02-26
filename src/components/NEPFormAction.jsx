import { LuSave } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useAtomValue } from "jotai";
import { applicationFormContext } from "../App";

const NEPFormAction = ({onNext, onBack, onDraft, onFinish, draftLoader}) => {

    const formContext = useAtomValue(applicationFormContext)

  return (
    <div className="nep_stepper_actionbar">
        <div className="nep_btn_group start_">
            <button className="nep_btn info_" type="button" onClick={onDraft} disabled={draftLoader}>
                <span>Save Draft</span>
                <i><LuSave /></i>

                {
                    draftLoader &&
                    <div className="loader_">
                        <span>Saving...</span>

                        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" xmlSpace="preserve">
                            <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                            <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                                C22.32,8.481,24.301,9.057,26.013,10.047z">
                                <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 20 20"
                                to="360 20 20"
                                dur="0.5s"
                                repeatCount="indefinite"/>
                            </path>
                        </svg>

                    </div>
                }

            </button>
        </div>

        <div className="nep_btn_group start_">
            {
                formContext.activeIndex > 1 &&
                <button className="nep_btn secondary_" type="button" onClick={onBack}>
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