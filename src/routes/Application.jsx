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
      <NEPDashboardTitle welcomeMessage={true}>
        <h2>Your <span>NEP 4.0</span> Application</h2>
      </NEPDashboardTitle>

      <NEPApplicationSteps progress={15} activeIndex={0}/>

      <div className="nep_application_grid"> 
        
          <NEPApplicationFormWrapper />

          <div className="nep_application_interactive">
            <NEPApplicationVideo />
          </div>

      </div>
    </>
  )
}

export default Application