import "./DashboardNavBar.css"

export default function DashboardNavBar() {
    return (
        <div className={"DashboardNavBar"}>
            <button>Details</button>
            <button>UserRentals</button>
            <button>UserFavorites</button>
            <button>CompanyCars</button>
            <button>CompanyHistory</button>
            <button>AdminUsers</button>
            <button>AdminCompany</button>
        </div>
    )
}