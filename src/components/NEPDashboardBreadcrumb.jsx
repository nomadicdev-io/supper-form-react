import { useAtomValue } from "jotai";
import { TbHome } from "react-icons/tb";
import { Link } from "react-router-dom";
import { breadcrumbData } from "../App";

const NEPDashboardBreadcrumb = () => {

    const breadcumbArray = useAtomValue(breadcrumbData)

  return (
    <div className="breadcrumb_">
        <ul>
            <li>
                <Link to={'/'}>
                    <i><TbHome /></i>
                    <span>User Dashboard</span>
                </Link>
            </li>
            {
                breadcumbArray.map((item, index)=> (
                    <li key={'breadcrumb' + index}>
                        <Link to={item.route}>{item.title}</Link>
                    </li>
                ))
            }
            
        </ul>
    </div>
  )
}

export default NEPDashboardBreadcrumb