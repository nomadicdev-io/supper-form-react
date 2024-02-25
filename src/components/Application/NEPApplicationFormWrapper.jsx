import NEPApplicationForm from "./NEPApplicationForm"
import NEPFormAction from "../NEPFormAction"
import PersonalForm from "./Forms/PersonalForm"
import EducationForm from "./Forms/EducationForm"
import ExperienceForm from "./Forms/ExperienceForm"
import MindsetsForm from "./Forms/MindsetsForm"
import MotivationForm from "./Forms/MotivationForm"
import MoreForm from "./Forms/MoreForm"

const NEPApplicationFormWrapper = () => {

   const nextFn = ()=> {
    console.log('Next Clicked')
   }

   const backFn = ()=> {
    console.log('Back Clicked')
   }

   const draftFn = ()=> {
    console.log('Draft Clicked')
   }

   const finishFn = ()=> {
    console.log('Finsih Clicked')
   }

  return (
    <div className="nep_application_formwrapper">

        <NEPApplicationForm 
            title={'Personal Information'}
            description={'Collect essential details: name, contact, address, birthdate, for efficient communication and record-keeping.'}
        >
            <PersonalForm />
        </NEPApplicationForm> 

         {/*
        <NEPApplicationForm 
            title={' Education History'}
            description={'Capture academic journey: schools attended, degrees earned, achievements, to comprehend and assess educational background thoroughly.'}
        >
            <EducationForm />
        </NEPApplicationForm>
       
        <NEPApplicationForm 
            title={'Work Experience'}
            description={'Gather employment data: job roles, companies, durations, responsibilities, for a comprehensive overview of professional history.'}
        >
            <ExperienceForm />
        </NEPApplicationForm>
        
        <NEPApplicationForm 
            title={'Nep Mindsets'}
            description={"Explore attitudes, beliefs, and perspectives to understand one's mindset for personal and professional development."}
        >
            <MindsetsForm />
        </NEPApplicationForm>
        

       <NEPApplicationForm 
            title={'Motivation'}
            description={'Identify driving forces, passions, and goals to comprehend and enhance individual motivation for sustained success.'}
        >
            <MotivationForm />
        </NEPApplicationForm>
        

         <NEPApplicationForm 
            title={'Tell us more'}
            description={'Encourage detailed responses about personal experiences, opinions, or preferences for better understanding and insights.'}
        >
            <MoreForm />
        </NEPApplicationForm> */}

        <NEPFormAction 
            onNext={()=> nextFn()}
            onBack={()=> backFn()}
            onDraft={()=> draftFn()}
            onFinish={()=> finishFn()}
        />

    </div>
  )
}

export default NEPApplicationFormWrapper