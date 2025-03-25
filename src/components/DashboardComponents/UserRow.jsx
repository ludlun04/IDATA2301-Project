

export default function UserRow({ user }) {
  return (
    <tr>
      <td>{user.getId()}</td>
      <td>{user.getEmail()}</td>
      <td>{user.getFirstName()}</td>
      <td>{user.getLastname()}</td>
      <td>{user.getPhoneNumber()}</td>
      <td>{user.getDateOfBirth()}</td>
      <td>{user.getRoles().map(role => <div key={role}>{role}</div>)}</td>
      <td><button>{user.getId()}</button></td>
    </tr>
  )
}