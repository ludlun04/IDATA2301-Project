import { createPortal } from "react-dom"
import EditUserDialogue from "./EditUserDialogue";
import "./UserRow.css"
import { useState } from "react";

export default function UserRow({ user }) {
  const [portal, setPortal] = useState(<div></div>);

  let onClose = () => {
    setPortal(<div></div>);
  }

  let editUser = () => {
    setPortal(createPortal(<EditUserDialogue onClose={onClose} user={user} />, document.body));
  }

  return (
    <>
      {portal}
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
    </>
  )
}