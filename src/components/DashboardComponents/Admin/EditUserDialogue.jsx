import "../Dialogue.css"
import DatePicker from "react-datepicker";
import AddressField from "../../input/AddressField/AddressField";
import PhoneNumberField from "../../input/PhoneNumberField/PhoneNumberField";
import { useState } from "react";
import { User } from "../../../model/User";
import { PhoneNumber } from "../../../model/PhoneNumber";
import { Address } from "../../../model/Address";
import { UsersAPI } from "../../../api/UsersAPI";

/**
 * EditUserDialogue component
 * Displays a form to edit user details.
 *
 * @param {Object} props - The component props.
 * @param {User} props.user - The user object to be edited.
 * @param {boolean} props.showRoleSelection - Flag to show role selection.
 * @param {function} props.onClose - Function to close the dialogue.
 * @returns {JSX.Element}
 */
export default function EditUserDialogue(props) {
  const user = props.user;
  const isAdmin = user.getRoles().includes("ADMIN");

  const [birthdate, setBirthdate] = useState(user.getDateOfBirth());

  const onEdit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const roles = ["USER"];
    
    if (data.AdminCheckbox === "on") {
      roles.push("ADMIN");
    }

    const newUser = new User(
      user.getId(),
      data.email,
      data.firstName,
      data.lastName,
      new PhoneNumber(
        data.countryCode,
        data.phoneNumber
      ),
      birthdate,
      props.showRoleSelection ? roles : user.getRoles(),
      new Address(
        data.addressCountry,
        data.addressStreetAddress,
        data.addressZipCode
      )
    )
    console.log("New user data:", newUser);

    UsersAPI.updateUser(newUser).then(() => {
      console.log("User updated successfully");
      window.location.reload();
      props.onClose();
    }).catch((error) => {
      console.error("Error updating user:", error);
    });
  }

  const onCancelEdit = (e) => {
    e.preventDefault();
    props.onClose();
  }

  return (
    <div className="Dialogue">
      <form onSubmit={onEdit}>
        <h2>Edit User</h2>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" defaultValue={user.getFirstName()} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" defaultValue={user.getLastName()} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" disabled={true} defaultValue={user.getEmail()} />
        </div>
        <PhoneNumberField phoneNumber={user.getPhoneNumber()} />
        <AddressField address={user.getAddress()} />
        <div>
          <label htmlFor="birthdate">Birthdate</label>
          <DatePicker name="birthdate" selected={birthdate} dateFormat={"dd.MM.yyyy"} onChange={(date) => setBirthdate(date)} />
        </div>

        {props.showRoleSelection ?
          (<div>
            <label htmlFor="role">Role</label>
            <div>
              <input type="checkbox" defaultChecked={isAdmin} name="AdminCheckbox" /><label htmlFor="AdminCheckbox">Admin</label>
            </div>
          </div>)
          : null
        }

        <div className={"detailsSectionButtonContainer"}>
          <input type="submit" className={"FormSubmitButton detailsSectionButton"} value={"Save"} />
          <input type="button" className={"FormSubmitButton detailsSectionButton"} onClick={onCancelEdit} value={"Cancel"} />
        </div>
      </form>
    </div>
  );
}