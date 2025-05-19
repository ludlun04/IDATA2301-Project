import "./Dashboard.css"
import DashboardNavBar from "../../components/DashboardComponents/DashboardNavBar/DashboardNavBar";
import {Outlet} from "react-router-dom";
import {useState} from "react";

export default function Dashboard() {
    const [navBarButtonActive, setNavBarButtonActive] = useState(false);

    const onNavBarButtonClicked = () => {
        setNavBarButtonActive(!navBarButtonActive);
    }

  return (
    <div className={"Dashboard"}>
        <DashboardNavBar className={"dashboardDashboardNavBar"}/>
      <div className={"dashboardSectionContainer"}>
        <Outlet />
      </div>
    </div>
  )
}