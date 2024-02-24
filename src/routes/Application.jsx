import NEPApplicationSteps from "../components/NEPApplicationSteps"
import NEPDashboardTitle from "../components/NEPDashboardTitle"
import { useEffect } from "react"
import { useSetAtom } from "jotai"
import { breadcrumbData } from "../App"
import NEPApplicationVideo from "../components/Application/NEPApplicationVideo"
import NEPApplicationFormWrapper from "../components/Application/NEPApplicationFormWrapper"

const Application = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)

  useEffect(()=> {
    setBreadcrumb([{title: 'Applicaiton', route: '/application'}])
  }, [])

  return (
    <>
      <NEPDashboardTitle 
        welcomeMessage={true}
      >
        <h2>Your <span>NEP 4.0</span> Application</h2>
        
      </NEPDashboardTitle>
      <NEPApplicationSteps />

      <div className="nep_application_grid">
          <div className="nep_application_interactive">

            <NEPApplicationVideo />
            
          </div>

          <NEPApplicationFormWrapper />
      </div>
    </>
  )
}

export default Application