import "./UsersSection.css";
import UserRow from "./UserRow"
import { User } from "../../../model/User"

export default function UsersSection() {
  const users = [
    new User(1, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"]),
    new User(2, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"]),
    new User(3, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"]),
    new User(4, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"]),
    new User(5, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"]),
    new User(6, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"]),
    new User(7, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"]),
    new User(8, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"]),
    new User(9, "Yes@no.com", "Chuck", "Norris", 41234567, "20-01-2912", ["User", "Admin"]),
  ]

  const createUserRows = () => {
    return users.map(user => {
      return <UserRow key={user.getId()} user={user} />
    })
  }

  return (
    <main className={"usersSectionMain"}>
        <h1>Users</h1>
        <table className={"usersTable"}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Date Of Birth</th>
              <th>Roles</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {createUserRows()}
          </tbody>
        </table>
      </main>
  )
}