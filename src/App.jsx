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
import { atom } from 'jotai';

export const applicationFormContext = atom({
    activeIndex: null,
    formCount: 6, 
    tabIndex: null,
    activeVideoURL: '/personal_information.mp4',
})

export const breadcrumbData = atom([])

function App() {

  return (
    <main className="nep_dashboard">
      <NEPDashboardSidebar />

      <NEPDashboardContainer>
            <NEPDashboardHeader />

            <div className="nep_dashboard_contentbody">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/application" element={<Application />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/assessment" element={<Assessment />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>

        </NEPDashboardContainer>

        <NEPFooter />

      
    </main>
  )
}

export default App
