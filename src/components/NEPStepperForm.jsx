import { useEffect, useState } from "react"
import NEPStepperTabs from "./NEPStepperTabs"
import NEPStepperArea from "./NEPStepperArea"

const NEPStepperForm = ({data}) => {

  const [activeIndex, setActiveIndex] = useState(0)

  const getActiveIndex = ()=> {
    const ga = sessionStorage.getItem('formActiveIndex')
    ga ? setActiveIndex(+ga) : setActiveIndex(0)
  }

  const tabClick = async (value)=> {
    console.log(value)
    setActiveIndex(value)
    sessionStorage.setItem('formActiveIndex', JSON.stringify(value))
  }

  useEffect(()=> {
    getActiveIndex();
  }, [])


  return (
    <>
      {
        data?.stepperTab && 
        <NEPStepperTabs 
        tabData={data.stepperTab} 
        activeIndex={activeIndex} 
        tabClick={tabClick}/>
      }{
        data?.forms && 
        <NEPStepperArea 
        forms={data.forms} 
        lang={data.lang} 
        activeIndex={activeIndex}/>
      }
    </>
  )
}

export default NEPStepperForm