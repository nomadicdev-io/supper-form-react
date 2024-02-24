import NEPProgressWidget from "./Application/NEPProgressWidget"

const NEPDashboardTitle = ({children, welcomeMessage}) => {
  return (
    <div className="nep_dashboard_title">
        <div className="title_">
            {
              welcomeMessage &&
              <p>Hello, <strong>Alan Sha Salim</strong></p>
            }
            {children}
        </div>
    </div>
  )
}

export default NEPDashboardTitle