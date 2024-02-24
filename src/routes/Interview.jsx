import { useEffect } from "react"
import { useSetAtom } from "jotai"
import { breadcrumbData } from "../App"
import NEPDashboardTitle from "../components/NEPDashboardTitle"
import NEPApplicationSteps from "../components/NEPApplicationSteps"

const Interview = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)

  useEffect(()=> {
    setBreadcrumb([{title: 'Interview', route: '/interview'}])
  }, [])

  return (
    <>
      <NEPDashboardTitle welcomeMessage={true}>
        <h2><span>NEP 4.0</span> AI Interview</h2>
      </NEPDashboardTitle>

      <NEPApplicationSteps progress={93} activeIndex={2} />
    </>
  )
}

export default Interview