import NEPApplicationSteps from "../components/NEPApplicationSteps"
import NEPDashboardTitle from "../components/NEPDashboardTitle"
import { useEffect, useState } from "react"
import { useSetAtom } from "jotai"
import { breadcrumbData } from "../App"
import NEPApplicationVideo from "../components/Application/NEPApplicationVideo"
import NEPApplicationFormWrapper from "../components/Application/NEPApplicationFormWrapper"
import StartForm from "../components/Application/Forms/StartForm"

const Application = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)
  const [isFormStarted, setIsFormStarted] = useState(false)
  const LS = window.sessionStorage

  const startApplication = async ()=> {
    try{
      await LS.setItem('aplication_started', true)
      setIsFormStarted(true)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=> {
    setBreadcrumb([{title: 'Applicaiton', route: '/application'}])

    LS.getItem('aplication_started') == 'true' ? setIsFormStarted(true) : LS.setItem('aplication_started', false)
  }, [])

  return (
    <>
      <NEPDashboardTitle welcomeMessage={true}>
        <h2>Your <span>NEP 4.0</span> Application</h2>
      </NEPDashboardTitle>

      <NEPApplicationSteps progress={0}/>

      {
        isFormStarted ?
        <div className="nep_application_grid"> 
        
            <NEPApplicationFormWrapper />

            <div className="nep_application_interactive">
              <NEPApplicationVideo />
            </div>

        </div>
        :
        <StartForm onStart={startApplication}/>
      }

      
    </>
  )
}

export default Application