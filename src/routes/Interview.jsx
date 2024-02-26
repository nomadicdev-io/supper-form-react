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

  const [loadingState, setLoadingState] = useState({
    start: false,
    loader: true,
    interview: false
  })

  const startInterview = ()=> {
    if(formContext.isApplicationCompleted){
      setLoadingState({
        start: false,
        loader: true,
        interview: false
      })

      setTimeout(()=> {
        setLoadingState({
          start: false,
          loader: false,
          interview: true
        })
      }, 500)
    }else{
      setLoadingState({
        start: false,
        loader: true,
        interview: false
      })

      setTimeout(()=> {
        setLoadingState({
          start: true,
          loader: false,
          interview: false
        })
      }, 500)
    }
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
        loadingState.start &&
        <NEPInterviewAlert />
      }

      {
        loadingState.loader && 
        <NEPSkeletonLoader />
      }

      {
        loadingState.interview &&
        <>
          <NEPApplicationSteps />
        </>
      }

    </>
  )
}

export default Interview