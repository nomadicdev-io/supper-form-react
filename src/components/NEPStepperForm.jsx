import NEPForm from "./NEPForm"

const NEPStepperForm = ({forms, lang, activeIndex}) => {
  return (
    <div className="nep_stepper_form_body">
      {
        activeIndex == 0 && <NEPForm />
      }
    </div>
  )
}

export default NEPStepperForm