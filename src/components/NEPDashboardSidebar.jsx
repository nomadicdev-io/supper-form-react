import { MdSpaceDashboard } from "react-icons/md";
import { FaFileLines } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const NEPDashboardSidebar = () => {
  return (
    <div className='nep_dashboard_sidebar'>
        <div className="logo_">
            <img src="/logo-icon.svg" alt="NEP 4.0"/>
        </div>

        <nav>
            <ul>
                <li>
                    <NavLink to={'/'} title="Dashboard" className={({ isActive }) => (isActive ? 'active_' : '')}><i><MdSpaceDashboard /></i></NavLink>
                </li>
                <li>
                    <NavLink to={'/application'} title="Applicaiton" className={({ isActive }) => (isActive ? 'active_' : '')}><i><FaFileLines /></i></NavLink>
                </li>
                <li>
                    <NavLink to={'/interview'} title="Interview" className={({ isActive }) => (isActive ? 'active_' : '')}><i><FaRobot /></i></NavLink>
                </li>
                <li>
                    <NavLink to={'/assessment'} title="Assessment" className={({ isActive }) => (isActive ? 'active_' : '')}><i><IoIosPaper /></i></NavLink>
                </li>
                <li>
                    <NavLink to={'/settings'} title="Setting" className={({ isActive }) => (isActive ? 'active_' : '')}><i><AiFillSetting /></i></NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NEPDashboardSidebar