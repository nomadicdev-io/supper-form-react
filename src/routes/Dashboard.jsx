import { useEffect } from "react"
import { useSetAtom } from "jotai"
import { breadcrumbData } from "../App"
import NEPDashboardTitle from "../components/NEPDashboardTitle"

const Dashboard = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)

  useEffect(()=> {
    setBreadcrumb([])
  }, [])

  return (
    <>
      <NEPDashboardTitle welcomeMessage={true}>
          <h2><span>NEP 4.0</span> Dashboard</h2>
        </NEPDashboardTitle>
    </>
  )
}

export default Dashboard