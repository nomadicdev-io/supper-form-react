import NEPApplicationForm from "./NEPApplicationForm"
import NEPFormAction from "../NEPFormAction"
import PersonalForm from "./Forms/PersonalForm"
import EducationForm from "./Forms/EducationForm"
import ExperienceForm from "./Forms/ExperienceForm"
import MindsetsForm from "./Forms/MindsetsForm"
import MotivationForm from "./Forms/MotivationForm"
import MoreForm from "./Forms/MoreForm"
import { useAtom, useSetAtom } from "jotai"
import { useEffect, useState } from "react"
import { LS, applicationFormContext, statusIndicatorContext } from "../../App"

const NEPApplicationFormWrapper = () => {

    const [formContext, setFormContext] = useAtom(applicationFormContext)
    const setStatus = useSetAtom(statusIndicatorContext)
    const [draftLoader, setDraftLoader] = useState(false)

    const srollTop = ()=> {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

   const nextFn = ()=> {
        if(formContext.activeIndex > formContext.formCount) return;
        const newIndex = formContext.activeIndex + 1

        LS.setItem('active_index', newIndex)

        setFormContext({ 
            ...formContext,
            activeIndex: newIndex
        })

        srollTop()
   }

   const backFn = ()=> {
        if(formContext.activeIndex == 0) return;
        const newIndex = formContext.activeIndex - 1

        LS.setItem('active_index', newIndex)

        setFormContext({ 
            ...formContext,
            activeIndex: newIndex
        })

        srollTop()
   }

   const draftFn = ()=> {

        setDraftLoader(true)

        setTimeout(()=> {
            setStatus({
                type: 'success',
                title: 'Saved to Draft!',
                message: 'Your data has been saved to draft.',
                show: true
            })

            setDraftLoader(false)

        }, 1000)
    
   }

   const finishFn = ()=> {
        LS.setItem('is_application_completed', true)
        setFormContext({
            ...formContext,
            isApplicationCompleted: true
        })
        srollTop()
   }

   useEffect(()=> {

   }, [])

  return (
    <>
        {
        formContext.activeIndex <= formContext.formCount &&
            <div className="nep_application_formwrapper">

                {
                    formContext.activeIndex == 1 ?
                        <NEPApplicationForm 
                            title={'Personal Information'}
                            description={'Collect essential details: name, contact, address, birthdate, for efficient communication and record-keeping.'}
                        >
                            <PersonalForm />
                        </NEPApplicationForm> 
                    :
                    formContext.activeIndex == 2 ?
                        <NEPApplicationForm 
                            title={' Education History'}
                            description={'Capture academic journey: schools attended, degrees earned, achievements, to comprehend and assess educational background thoroughly.'}
                        >
                            <EducationForm />
                        </NEPApplicationForm>
                    :
                    formContext.activeIndex == 3 ?
                        <NEPApplicationForm 
                            title={'Work Experience'}
                            description={'Gather employment data: job roles, companies, durations, responsibilities, for a comprehensive overview of professional history.'}
                        >
                            <ExperienceForm />
                        </NEPApplicationForm>
                    :
                    formContext.activeIndex == 4 ?
                        <NEPApplicationForm 
                            title={'Nep Mindsets'}
                            description={"Explore attitudes, beliefs, and perspectives to understand one's mindset for personal and professional development."}
                        >
                            <MindsetsForm />
                        </NEPApplicationForm>
                    :
                    formContext.activeIndex == 5 ?
                        <NEPApplicationForm 
                            title={'Motivation'}
                            description={'Identify driving forces, passions, and goals to comprehend and enhance individual motivation for sustained success.'}
                        >
                            <MotivationForm />
                        </NEPApplicationForm>
                    :
                    formContext.activeIndex == 6 ?
                        <NEPApplicationForm 
                            title={'Tell us more'}
                            description={'Encourage detailed responses about personal experiences, opinions, or preferences for better understanding and insights.'}
                        >
                            <MoreForm />
                        </NEPApplicationForm> 
                    :
                    null
                }


                <NEPFormAction 
                    draftLoader={draftLoader}
                    onNext={()=> nextFn()}
                    onBack={()=> backFn()}
                    onDraft={()=> draftFn()}
                    onFinish={()=> finishFn()}
                />

            </div>
        }
    </>
  )
}

export default NEPApplicationFormWrapper