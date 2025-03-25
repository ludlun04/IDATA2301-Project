import "./Dashboard.css"
import DashboardNavBar from "../../components/DashboardComponents/DashboardNavBar/DashboardNavBar";
import { useState } from "react";
import UsersSection from "../../components/DashboardComponents/UsersSection";
import CompaniesSection from "../../components/DashboardComponents/CompaniesSection";

export default function Dashboard() {
  let [currentPage, setCurrentPage] = useState("Users");

  let getSection = () => {
    switch (currentPage) {
      case "Users":
        return <UsersSection />;
      case "Companies":
        return <CompaniesSection />;
      default:
        break;
    }
  }

  return (
    <div className={"Dashboard"}>
      <DashboardNavBar setCurrentPage={setCurrentPage} />
      {getSection()}
    </div>
  )
}