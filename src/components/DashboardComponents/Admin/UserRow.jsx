import { createPortal } from "react-dom"
import EditUserDialogue from "./EditUserDialogue";
import {useState} from "react";
import "./UserRow.css"

export default function UserRow({ user }) {
  const [portal, setPortal] = useState(<></>);

  let onClose = () => {
    setPortal(<></>);
  }

  let editUser = () => {
    setPortal(createPortal(<EditUserDialogue showRoleSelection={true} onClose={onClose} user={user} />, document.body));
  }

  return (
    <>
      {portal}
      <tr className={"userRow"}>
        <td>{user.getId()}</td>
        <td>{user.getEmail()}</td>
        <td>{user.getFirstName()}</td>
        <td>{user.getLastName()}</td>
        <td>{user.getPhoneNumber().getNumber()}</td>
        <td>{user.getDateOfBirth().toDateString()}</td>

        <td><div>{user.getRoles().map(role => <p key={role}>{role}</p>)}</div></td>
        <td><button onClick={editUser}>{"Edit"}</button></td>
      </tr>
    </>
  )
}