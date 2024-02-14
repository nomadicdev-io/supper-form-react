import { useEffect, useState } from "react"
import NEPForm from "./NEPForm"

const NEPStepperForm = ({forms, lang, activeIndex}) => {
  const [formData, setFormData] = useState('')
  useEffect(()=> {
      const d = forms;

      d.map(item=> {
        item.defaultValues = {}
        item.formFields?.map(el=> {
           item.defaultValues[el.key] = ''
        })
      })

      setFormData(d)
      
  }, [])
  return (
    <div className="nep_stepper_form_body">
      {
        formData && 
        formData?.map((item, index)=> (
          activeIndex == index && <NEPForm key={item.key} data={item} defaultValues={''} lang={lang}/>
        ))
      }
    </div>
  )
}

export default NEPStepperForm