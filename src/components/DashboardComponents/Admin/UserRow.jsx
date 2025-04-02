import "./UserRow.css"

export default function UserRow({ user }) {


  let editUser = () => {
    alert(`Editing User ${user.getId()}`)
  }

  return (
    <tr className={"userRow"}>
      <td>{user.getId()}</td>
      <td>{user.getEmail()}</td>
      <td>{user.getFirstName()}</td>
      <td>{user.getLastName()}</td>
      <td>{user.getPhoneNumber()}</td>
      <td>{user.getDateOfBirth()}</td>
      <td><div>{user.getRoles().map(role => <p key={role}>{role}</p>)}</div></td>
      <td><button onClick={editUser}>{"Edit"}</button></td>
    </tr>
  )
}