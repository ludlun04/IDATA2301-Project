import PhoneNumberField from "../../input/PhoneNumberField/PhoneNumberField";
import "./EditUserDialogue.css"

export default function EditUserDialogue(props) {
  const user = props.user;

  const onEdit = (e) => {
    e.preventDefault();
    console.log("Edit button clicked");
  }

  const onCancelEdit = (e) => {
    e.preventDefault();
    props.onClose();
  }

  return (
    <div className="EditUserDialogue">
      <form >
        <h2>Edit User</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input  type="text" defaultValue={user.getFirstName()} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" defaultValue={user.getEmail()} />
        </div>
        <PhoneNumberField/>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" defaultValue={user.getFirstName()} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" defaultValue={user.getLastName()} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text"/>
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate</label>
          <input type="text" defaultValue ={user.getDateOfBirth()} />
        </div>
        <div className={"detailsSectionButtonContainer"}>
          <button className={"FormSubmitButton detailsSectionButton"} onClick={onEdit}>Save</button>
          <button className={"FormSubmitButton detailsSectionButton"} onClick={onCancelEdit}>Cancel</button>
        </div>
      </form>
    </div>
  );
}