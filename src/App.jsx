import { Route, Routes } from "react-router-dom"
import './assets/scss/app.scss'
import Dashboard from "./routes/Dashboard"
import Interview from "./routes/Interview"
import Application from "./routes/Application"
import Assessment from "./routes/Assessment"
import Settings from "./routes/Settings"
import NEPDashboardSidebar from "./components/NEPDashboardSidebar"
import NEPDashboardContainer from "./components/NEPDashboardContainer"
import NEPDashboardHeader from "./components/NEPDashboardHeader"
import NEPFooter from "./components/NEPFooter"
import { atom, useAtom, useAtomValue } from 'jotai';
import NEPStatusIndicator from "./components/NEPStatusIndicator"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import {NEPSkeletonLoaderBody} from "./components/NEPSkeletonLoader"

export const LS = window.localStorage

export const applicationFormContext = atom({
    activeIndex: null,
    formCount: 6, 
    tabIndex: null,
    activeVideoURL: '/personal_information.mp4',
    isApplicationCompleted: false,
    isUploadingFinished: false,
    isFormSessionFinished: false,
    isInterviewCompleted: false,
})

export const statusIndicatorContext = atom({
  type: '',
  title: '',
  message: '',
  show: false
})

export const breadcrumbData = atom([])

function App() {

  const status = useAtomValue(statusIndicatorContext)
  const [context, setContext] = useAtom(applicationFormContext)
  const [isLoading, setIsLoading] = useState(true)

  const fetchingUserData = async ()=> {
    try{
      setIsLoading(true)
      const isApplicationCompleted = await LS.getItem('is_application_completed')
      const activeIndex = await LS.getItem('active_index')
      const tabIndex = await LS.getItem('tab_index')
      const isUploadingFinished = await LS.getItem('is_uploading_finished')
      const isFormSessionFinished = await LS.getItem('is_form_session_finished')
      const isInterviewCompleted = await LS.getItem('is_interview_completed')
      
      setContext({
        ...context,
        isApplicationCompleted: isApplicationCompleted ? Boolean(isApplicationCompleted) : false,
        activeIndex: activeIndex ? +activeIndex : 1,
        tabIndex: tabIndex ? +tabIndex : 0,
        isUploadingFinished: isUploadingFinished ? Boolean(isUploadingFinished) : false,
        isFormSessionFinished: isFormSessionFinished ? Boolean(isFormSessionFinished) : false,
        isInterviewCompleted: isInterviewCompleted ? Boolean(isInterviewCompleted) : false,
      })

      setIsLoading(false)

    }catch(error){
      console.log(error)
      setIsLoading(false)
    }

  }

  useEffect(()=> {
    fetchingUserData();
  }, [])

  return (
    <main className="nep_dashboard">
      <NEPDashboardSidebar />

      <NEPDashboardContainer>
          <NEPDashboardHeader />

          {
            isLoading ?
            <NEPSkeletonLoaderBody />
            :
            <div className="nep_dashboard_contentbody">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/application" element={<Application />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/assessment" element={<Assessment />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          }

      </NEPDashboardContainer>

      <AnimatePresence>
        {
          status.show &&
          <NEPStatusIndicator />
        }
      </AnimatePresence>

      <NEPFooter />

      
    </main>
  )
}

export default App
