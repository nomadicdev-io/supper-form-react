import { useEffect, useState } from "react"
import NEPStepperTabs from "./NEPStepperTabs"
import NEPStepperForm from "./NEPStepperForm"
import { atom, useAtom } from "jotai"

export const stepperFormContext = atom({})

const NEPStepperArea = ({data}) => {

  const [formStore, setFormStore] = useAtom(stepperFormContext)

  const getActiveIndex = ()=> {
    const ga = sessionStorage.getItem('formActiveIndex')
    ga ? setFormStore({...formStore, activeIndex: +ga}) : setFormStore({...formStore, activeIndex: 0})
  }

  const tabClick = async (value)=> {
    console.log(value)
    setFormStore({...formStore, activeIndex: value})
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
        activeIndex={formStore.activeIndex} 
        tabClick={tabClick}/>
      }{
        data?.forms && 
        <NEPStepperForm 
        forms={data.forms} 
        lang={data.lang} 
        activeIndex={formStore.activeIndex}/>
      }
    </>
  )
}

export default NEPStepperArea