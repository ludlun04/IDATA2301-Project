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
    ["Details", <DetailsSection key={"Details"}/>],
    ["Rentals", <UserRentals key={"Rentals"}/>],
    ["Favorites", <UserFavorites key={"Favorites"}/>],
    ["Company Cars History", <CompanyCarsHistory key={"Company Cars History"}/>],
    ["Company Cars", <CompanyCars key={"Company Cars"}/>],
    ["Users", <UsersSection key={"Users"}/>],
    ["Companies", <CompaniesSection key={"Companies"}/>]
  ];

  const pages = pagesWithLinks.map((page) => page[0]);

  const getSection = () => {
    for (const element of pagesWithLinks) {
      if (element[0] === currentPage) {
        return element[1];
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

  const getCurrentPage = () => (
    <p className={"dashboardCurrentPage"}>{currentPage}</p>
  )

  return (
    <div className={"Dashboard"}>
      <DashboardNavBar className={"dashboardDashboardNavBar"} pages={pages} setCurrentPage={setCurrentPage} />
      <DropdownMenu className={"dashboardDropdownMenu"} alwaysShownContent={getCurrentPage()}>
        {getNavBarExceptCurrentPage()}
      </DropdownMenu>
      <div className={"dashboardSectionContainer"}>
        {getSection()}
      </div>
    </div>
  )
}