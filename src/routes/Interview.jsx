import { useEffect, useState } from "react"
import { useAtom, useSetAtom } from "jotai"
import { applicationFormContext, breadcrumbData } from "../App"
import NEPDashboardTitle from "../components/NEPDashboardTitle"
import NEPInterviewInfo from "../components/NEPInterviewInfo"
import NEPSkeletonLoader from "../components/NEPSkeletonLoader"
import NEPInterviewIntroSection from "../components/sections/NEPInterviewIntroSection"
import NEPChatSection from "../components/sections/NEPChatSection"

const Interview = () => {

  const setBreadcrumb = useSetAtom(breadcrumbData)
  const [formContext, setFormContext] = useAtom(applicationFormContext)

  const [isLoading, setIsLoading] = useState(true)
  const [isChatApproved, setIsChatApproved] = useState(false)

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
      {
        !isChatApproved &&
        <NEPDashboardTitle welcomeMessage={true}>
          <h2><span>NEP 4.0</span> AI Interview</h2>
        </NEPDashboardTitle>
      }

      {
        isLoading ?
        <NEPSkeletonLoader />
        :
        <>
          {
            formContext.isApplicationCompleted ?
            <>
              {
                isChatApproved ? <NEPChatSection /> : <NEPInterviewIntroSection isFinished={()=> setIsChatApproved(true)}/>
              }
            </>
            
            :
            <NEPInterviewInfo />
          }
        </>
      }
    </>
  )
}

export default Interview