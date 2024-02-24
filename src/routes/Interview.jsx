import { useEffect } from "react"
import { useSetAtom } from "jotai"
import { breadcrumbData } from "../App"
import NEPDashboardTitle from "../components/NEPDashboardTitle"

const Interview = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)

  useEffect(()=> {
    setBreadcrumb([{title: 'Interview', route: '/interview'}])
  }, [])

  return (
    <>
      <NEPDashboardTitle 
        welcomeMessage={true}
      >
        <h2><span>NEP 4.0</span> AI Interview</h2>
        
      </NEPDashboardTitle>

    </>
  )
}

export default Interview