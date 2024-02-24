import { useEffect } from "react"
import { useSetAtom } from "jotai"
import { breadcrumbData } from "../App"
import NEPDashboardTitle from "../components/NEPDashboardTitle"

const Assessment = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)

  useEffect(()=> {
    setBreadcrumb([{title: 'Assessment', route: '/assessment'}])
  }, [])

  return (
    <>
      <NEPDashboardTitle 
        welcomeMessage={true}
      >
        <h2>Personality <span>Assessment</span></h2>
        
      </NEPDashboardTitle>

    </>
  )
}

export default Assessment