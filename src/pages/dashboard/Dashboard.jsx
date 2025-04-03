import "./Dashboard.css"
import DashboardNavBar from "../../components/DashboardComponents/DashboardNavBar/DashboardNavBar";
import { useState } from "react";
import UsersSection from "../../components/DashboardComponents/Admin/UsersSection";
import CompaniesSection from "../../components/DashboardComponents/Admin/CompaniesSection";
import UserRentals from "../../components/DashboardComponents/User/UserRentals";
import DetailsSection from "../../components/DashboardComponents/User/DetailsSection";
import UserFavorites from "../../components/DashboardComponents/User/UserFavorites";
import CompanyCarsHistory from "../../components/DashboardComponents/Company/CompanyCarsHistory";
import CompanyCars from "../../components/DashboardComponents/Company/CompanyCars";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("Details");

  const pagesWithLinks = [
    ["UserRentals", <UserRentals/>],
    ["UserFavorites", <UserFavorites/>],
    ["Users", <UsersSection/>],
    ["Companies", <CompaniesSection/>],
    ["Details", <DetailsSection/>],
    ["CompanyCarsHistory", <CompanyCarsHistory/>],
    ["CompanyCars", <CompanyCars/>]
  ];

  const pages = pagesWithLinks.map((page) => page[0]);

  const getSection = () => {
    for (let i = 0; i < pagesWithLinks.length; i++) {
      if (pagesWithLinks[i][0] === currentPage) {
        return pagesWithLinks[i][1];
      }
    }
    return null;
  }

  const getNavBarExceptCurrentPage = () => {

    const pagesExceptCurrent = pages.filter((page) => page !== currentPage);

    return (
      <DashboardNavBar className={"dashboardDashboardDropdownNavBar"} pages={pagesExceptCurrent} setCurrentPage={setCurrentPage} />
    )
  }

  return (
    <div className={"Dashboard"}>
      <DashboardNavBar className={"dashboardDashboardNavBar"} pages={pages} setCurrentPage={setCurrentPage} />
      <DropdownMenu className={"dashboardDropdownMenu"} alwaysShownContent={<p>{currentPage}</p>}>
        {getNavBarExceptCurrentPage()}
      </DropdownMenu>
      <div className={"dashboardSectionContainer"}>
        {getSection()}
      </div>
    </div>
  )
}