

export default function UserRow({ user }) {


  let editUser = () => {
    alert("Edit user")
  }

  return (
    <tr>
      <td>{user.getId()}</td>
      <td>{user.getEmail()}</td>
      <td>{user.getFirstName()}</td>
      <td>{user.getLastName()}</td>
      <td>{user.getPhoneNumber()}</td>
      <td>{user.getDateOfBirth()}</td>
      <td>{user.getRoles().map(role => <div key={role}>{role}</div>)}</td>
      <td><button onClick={editUser}>{"Edit"}</button></td>
    </tr>
  )
}