import { TbLogout } from "react-icons/tb";
import NEPDashboardBreadcrumb from "./NEPDashboardBreadcrumb";

const NEPDashboardHeader = () => {
  return (
    <div className="nep_dashboard_header">

       <NEPDashboardBreadcrumb />

        <div className="action_">
            <button className="logout_" type="button">
                <TbLogout />
            </button>
            <button className="profile_" type="button">
                <img src="/profile-pic.png" alt="NEP User Profile" />
            </button>
        </div>
        
    </div>
  )
}

export default NEPDashboardHeader