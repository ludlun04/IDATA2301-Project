import "./Dashboard.css"
import DashboardNavBar from "../../components/DashboardComponents/DashboardNavBar/DashboardNavBar";
import { useState } from "react";
import UsersSection from "../../components/DashboardComponents/Admin/UsersSection";
import CompaniesSection from "../../components/DashboardComponents/Admin/CompaniesSection";
import UserRentals from "../../components/DashboardComponents/User/UserRentals";
import DetailsSection from "../../components/DashboardComponents/User/DetailsSection";
import UserFavorites from "../../components/DashboardComponents/User/UserFavorites";

export default function Dashboard() {
  let [currentPage, setCurrentPage] = useState("Users");

  let getSection = () => {
    switch (currentPage) {
      case "UserRentals":
        return <UserRentals />;
      case "UserFavorites":
        return <UserFavorites />;
      case "Users":
        return <UsersSection />;
      case "Companies":
        return <CompaniesSection />;
      case "Details":
        return <DetailsSection />;
      default:
        break;
    }
  }

  return (
    <div className={"Dashboard"}>
      <DashboardNavBar setCurrentPage={setCurrentPage} />
      <div className={"DashboardSectionContainer"}>
        {getSection()}
      </div>
    </div>
  )
}