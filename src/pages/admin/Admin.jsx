import { NavLink } from "react-router-dom"
import "./Admin.css"
import UserRow from "../../components/DashboardComponents/UserRow"
import { User } from "../../model/User"

export default function Admin() {
  return (
    <div className={"admin"}>
      <nav className={"adminNavigation"}>
        <h1>Admin</h1>
        <ul>
          <li><NavLink>User</NavLink></li>
          <li><NavLink>Company</NavLink></li>
        </ul>
      </nav>
      <main className="adminMain">
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Date Of Birth</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            <UserRow user={new User(1, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"])} />
            <UserRow user={new User(2, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"])} />
          </tbody>
        </table>
      </main>
    </div>
  )
}