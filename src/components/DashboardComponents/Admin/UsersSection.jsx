import "./UsersSection.css";
import UserRow from "./UserRow"
import { useEffect, useState } from "react";
import { UsersAPI } from "../../../api/UsersAPI";

/**
 * UsersSection component
 * Displays a list of users in a table format.
 * 
 * @returns {JSX.Element}
 */
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
              <th><p>Id</p></th>
              <th><p>Email</p></th>
              <th><p>First Name</p></th>
              <th><p>Last Name</p></th>
              <th><p>Phone Number</p></th>
              <th><p>Date Of Birth</p></th>
              <th><p>Roles</p></th>
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