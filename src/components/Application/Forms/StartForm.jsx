import { useAtomValue } from "jotai";
import { FaArrowRight } from "react-icons/fa6";
import { applicationFormContext } from "../../../App";
import NEPInfoSection from "../../sections/NEPInfoSection";

const StartForm = ({onStart}) => {

  const formContext = useAtomValue(applicationFormContext)

  return (
    <NEPInfoSection
      imageUrl={formContext.activeIndex > 1 ? '/continue-form.svg' : '/new-form.svg'}
    >
      {
        formContext.activeIndex > 1 ?
        <h3>Not <span>finished</span> yet ? You can <span>start</span> <br/> from where you left off</h3>
        :
        <h3>Join the next generation of <br/> <span>Emirati technical</span> leaders</h3>
      }

      <div className="nep_btn_group center_">
        {
          formContext.activeIndex > 1?
          <button type="button" className="nep_btn" onClick={onStart}>
            <span>Continue Your Applicaiton</span>
            <i><FaArrowRight /></i>
          </button>
          :
          <button type="button" className="nep_btn" onClick={onStart}>
            <span>Start Your Applicaiton</span>
            <i><FaArrowRight /></i>
          </button>
        }
        
      </div>
      
    </NEPInfoSection>
  )
}

export default StartForm