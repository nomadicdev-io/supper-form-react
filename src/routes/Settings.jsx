import { useEffect } from "react"
import { useSetAtom } from "jotai"
import { breadcrumbData } from "../App"
import NEPDashboardTitle from "../components/NEPDashboardTitle"

const Settings = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)

  useEffect(()=> {
    setBreadcrumb([{title: 'Settings', route: '/settings'}])
  }, [])

  return (
    <>
      <NEPDashboardTitle welcomeMessage={true}>
        <h2><span>User</span> Settings</h2>
      </NEPDashboardTitle>

     

    </>
  )
}

export default Settings