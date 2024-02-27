import NEPInfoSection from "./sections/NEPInfoSection";

const NEPInterviewInfo = () => {
    
  return (

    <NEPInfoSection
        imageUrl={'/form-pending.svg'}
        buttonArray={[{title: 'Back To Home', path: '/', type: 'secondary'}, {title: 'Start Your Applicaiton', path: '/application', type: 'primary'}]}
    >
        <h3>Please complete <span>NEP 4.0</span> Application form<br/> to start the interview !</h3>
    </NEPInfoSection>

  )
}

export default NEPInterviewInfo