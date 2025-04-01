import "./UsersSection.css";
import UserRow from "./UserRow"
import { useEffect, useState } from "react";
import { UsersAPI } from "../../../api/UsersAPI";

export default function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    UsersAPI.getAllUsers().then(users => {
      setUsers(users)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const createUserRows = () => {
    return users.map(user => {
      console.log(user.getId())
      return <UserRow key={user.getId()} user={user} />
    })
  }

  return (
    <main className={"usersSectionMain"}>
      <h1>Users</h1>

      {(users.length === 0) && <h2>Maybe loading users, not sure though</h2>}
      {(users.length > 0) &&
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
      }
    </main>
  )
}