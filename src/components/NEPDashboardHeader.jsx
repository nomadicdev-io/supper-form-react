import { TbLogout } from "react-icons/tb";
import NEPDashboardBreadcrumb from "./NEPDashboardBreadcrumb";
import { Link } from "react-router-dom";

const NEPDashboardHeader = () => {
  return (
    <div className="nep_dashboard_header">

       <NEPDashboardBreadcrumb />

        <div className="action_">
            <button className="h_btn logout_" type="button">
                <TbLogout />
            </button>
            <Link to={'/settings'} className="h_btn profile_" type="button">
                <img src="/profile-pic.png" alt="NEP User Profile" />
            </Link>
        </div>
        
    </div>
  )
}

export default NEPDashboardHeader