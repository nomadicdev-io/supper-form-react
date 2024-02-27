import NEPApplicationSteps from "../components/NEPApplicationSteps"
import NEPDashboardTitle from "../components/NEPDashboardTitle"
import { useEffect, useState } from "react"
import { useAtom, useSetAtom } from "jotai"
import { applicationFormContext, breadcrumbData } from "../App"
import NEPApplicationVideo from "../components/Application/NEPApplicationVideo"
import NEPApplicationFormWrapper from "../components/Application/NEPApplicationFormWrapper"
import StartForm from "../components/Application/Forms/StartForm"
import NEPSkeletonLoader from "../components/NEPSkeletonLoader"
import SubmissionForm from "../components/Application/Forms/SubmissionForm"


const Application = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)
  const [isLoading, setIsLoading] = useState(true)
  const [startForm, setStartForm] = useState(false)
  const [formContext, setFormContext] = useAtom(applicationFormContext)

  const checkingSumbmission = ()=> {
    setIsLoading(true);

    setTimeout(()=> {
      setIsLoading(false);
    }, 500)
  }

  useEffect(()=> {
    setBreadcrumb([{title: 'Applicaiton', route: '/application'}])
    checkingSumbmission();
  }, [])

  return (
    <>
      <NEPDashboardTitle welcomeMessage={true}>
        <h2>Your <span>NEP 4.0</span> Application</h2>
      </NEPDashboardTitle>

      {
        isLoading ?
        <NEPSkeletonLoader /> 
        :
        <>
          {
            formContext.isApplicationCompleted ?
            <SubmissionForm />
            :
            <>
              {
                startForm ?
                  <>
                    <NEPApplicationSteps progress={0}/>
                    <div className="nep_application_grid"> 
                      <NEPApplicationFormWrapper />
                      <div className="nep_application_interactive">
                        <NEPApplicationVideo videoUrl={formContext.activeVideoURL}/>
                      </div>
                    </div>
                  </>
                :
               
                  <StartForm onStart={()=> setStartForm(true)} />
                
              }
            </>

          }
        </>
      }

    </>
  )
}

export default Application