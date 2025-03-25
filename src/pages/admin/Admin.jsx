import { NavLink } from "react-router-dom"
import "./Admin.css"
import UserRow from "../../components/DashboardComponents/UserRow"

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
            <UserRow />
            <UserRow />
          </tbody>
        </table>
      </main>
    </div>
  )
}