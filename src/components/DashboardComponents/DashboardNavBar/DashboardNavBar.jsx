import "./DashboardNavBar.css"

export default function DashboardNavBar({ setCurrentPage }) {

  let onClick = (page) => {
    return () => {
      setCurrentPage(page);
    }
  }

  return (
    <div className={"DashboardNavBar"}>
      <button onClick={onClick("")}>Details</button>
      <button onClick={onClick("")}>UserRentals</button>
      <button onClick={onClick("")}>UserFavorites</button>
      <button onClick={onClick("")}>CompanyCars</button>
      <button onClick={onClick("")}>CompanyHistory</button>
      <button onClick={onClick("Users")}>AdminUsers</button>
      <button onClick={onClick("Companies")}>AdminCompany</button>
    </div>
  )
}