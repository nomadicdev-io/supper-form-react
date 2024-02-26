import { useNavigate } from "react-router-dom";
import NEPInfoSection from "./sections/NEPInfoSection";

const NEPInterviewAlert = () => {
    
  return (

    <NEPInfoSection
        imageUrl={'/form-pending.svg'}
        primaryButton={{title: 'Start Your Applicaiton', path: '/application'}}
        secondaryButton={{title: 'Back To Home', path: '/'}}
    >
        <h3>Please complete <span>NEP 4.0</span> Application form<br/> to start the interview !</h3>
    </NEPInfoSection>

  )
}

export default NEPInterviewAlert