import "./Dashboard.css"
import DashboardNavBar from "../../components/DashboardComponents/DashboardNavBar/DashboardNavBar";
import {Outlet} from "react-router-dom";

export default function Dashboard() {


  return (
    <div className={"Dashboard"}>
      <DashboardNavBar className={"dashboardDashboardNavBar"} />
      <div className={"dashboardSectionContainer"}>
        <Outlet />
      </div>
    </div>
  )
}