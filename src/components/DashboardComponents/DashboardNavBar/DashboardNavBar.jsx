import "./DashboardNavBar.css"

export default function DashboardNavBar({ setCurrentPage }) {

  let onClick = (page) => {
    return () => {
      setCurrentPage(page);
    }
  }

  return (
    <div className={"DashboardNavBar"}>
      <button onClick={onClick("Details")}>Details</button>
      <button onClick={onClick("UserRentals")}>UserRentals</button>
      <button onClick={onClick("UserFavorites")}>UserFavorites</button>
      <button onClick={onClick("CompanyCarsHistory")}>CompanyHistory</button>
      <button onClick={onClick("CompanyCars")}>CompanyCars</button>
      <button onClick={onClick("Users")}>AdminUsers</button>
      <button onClick={onClick("Companies")}>AdminCompany</button>
    </div>
  )
}