import { useEffect } from "react"
import { useAtom, useSetAtom } from "jotai"
import { applicationFormContext, breadcrumbData } from "../App"
import NEPDashboardTitle from "../components/NEPDashboardTitle"
import NEPApplicationSteps from "../components/NEPApplicationSteps"

const Interview = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)
  const [formContext, setFormContext] = useAtom(applicationFormContext)

  useEffect(()=> {
    setBreadcrumb([{title: 'Interview', route: '/interview'}])
    setFormContext({
      ...formContext,
      tabIndex: 3,
      activeIndex: 7,
    })
  }, [])

  return (
    <>
      <NEPDashboardTitle welcomeMessage={true}>
        <h2><span>NEP 4.0</span> AI Interview</h2>
      </NEPDashboardTitle>

      <NEPApplicationSteps />
    </>
  )
}

export default Interview