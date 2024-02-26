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
  const [loadingState, setLoadingState] = useState({
      loader: true,
      intro: false,
      form: false
  })
  const [formContext, setFormContext] = useAtom(applicationFormContext)

  const checkingSumbmission = ()=> {
      const isCompleted = window.sessionStorage.getItem('is_form_completed')

      if(isCompleted){
        setFormContext({
          ...formContext, 
          isApplicationCompleted: true
        })

        setTimeout(()=> {
          setLoadingState({
            loader: false,
            intro: false,
            form: false
          })
        }, 500)
      }else{
        setTimeout(()=> {
          setLoadingState({
            loader: false,
            intro: true,
            form: false
          })
        }, 500)
      }
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
        loadingState?.loader ?
        <NEPSkeletonLoader />
        :
        <>
        {
          formContext.isApplicationCompleted ?
          <SubmissionForm />
          :
          <>
            {
              loadingState?.intro &&
              <StartForm onStart={()=> setLoadingState({loader: false, intro: false, form: true})} />
            }
  
            {
              loadingState?.form &&
                <>
                  <NEPApplicationSteps progress={0}/>
                  <div className="nep_application_grid"> 
                    <NEPApplicationFormWrapper />
                    <div className="nep_application_interactive">
                      <NEPApplicationVideo />
                    </div>
                  </div>
                </>
            }
  
          </>
        }
        </>
      }

    </>
  )
}

export default Application