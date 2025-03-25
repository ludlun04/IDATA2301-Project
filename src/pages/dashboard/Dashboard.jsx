import "./Dashboard.css"
import DashboardNavBar from "../../components/DashboardComponents/DashboardNavBar/DashboardNavBar";
import { useState } from "react";
import UsersSection from "../../components/DashboardComponents/UsersSection";
import CompaniesSection from "../../components/DashboardComponents/CompaniesSection";

export default function Dashboard() {
  let [currentPage, setCurrentPage] = useState("Users");

  return (
    <div className={"Dashboard"}>
      <DashboardNavBar setCurrentPage={setCurrentPage} />
      {currentPage == "Users" && <UsersSection />
      || currentPage == "Companies" && <CompaniesSection />}
    </div>
  )
}