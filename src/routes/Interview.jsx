import { useEffect, useState } from "react"
import { useAtom, useSetAtom } from "jotai"
import { applicationFormContext, breadcrumbData } from "../App"
import NEPDashboardTitle from "../components/NEPDashboardTitle"
import NEPApplicationSteps from "../components/NEPApplicationSteps"
import NEPInterviewAlert from "../components/NEPInterviewAlert"
import NEPSkeletonLoader from "../components/NEPSkeletonLoader"

const Interview = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)
  const [formContext, setFormContext] = useAtom(applicationFormContext)

  const [isLoading, setIsLoading] = useState(true)

  const startInterview = ()=> {
    setIsLoading(true);

    setTimeout(()=> {
      setIsLoading(false);
    }, 500)
  }

  useEffect(()=> {
    setBreadcrumb([{title: 'Interview', route: '/interview'}])

    if(formContext.isApplicationCompleted){
      setFormContext({
        ...formContext,
        tabIndex: 3,
        activeIndex: 7,
      })
    }

    startInterview();

  }, [])

  return (
    <>
      <NEPDashboardTitle welcomeMessage={true}>
        <h2><span>NEP 4.0</span> AI Interview</h2>
      </NEPDashboardTitle>
      {
        isLoading ?
        <NEPSkeletonLoader />
        :
        <>
          {
            formContext.isApplicationCompleted ?
            <NEPApplicationSteps />
            :
            <NEPInterviewAlert />
          }
        </>
      }
    </>
  )
}

export default Interview