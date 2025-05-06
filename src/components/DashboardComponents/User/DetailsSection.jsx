import "./DetailsSection.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import { UsersAPI } from "../../../api/UsersAPI";
import EditUserDialogue from "../Admin/EditUserDialogue";

export default function DetailsSection(props) {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [user, setUser] = useState(null);
  const [ showEditUserDialogue, setShowEditUserDialogue ] = useState(false);

  useEffect(() => {
    console.log("DetailsSection useEffect");
    UsersAPI.getCurrentAuthenticatedUser().then(user => {
      setUser(user);
    }).catch(error => {
      console.error("Error fetching user data:", error);
    });
  }, []);

  const handleLogOut = () => {
    signOut();
    navigate("/sign-in");
  }

  const handleEdit = () => {
    console.log("Edit user");
    setShowEditUserDialogue(true);
  }

  return (
    <>
      {showEditUserDialogue && <EditUserDialogue showRoleSelection={false} user={user} onClose={() => setShowEditUserDialogue(false)}/>}
      <div className={props.className} style={props.style}>
        {user ? (
          <div className="DetailsSection">
            <div className="detailsSectionRow">
              <p className={"detailsSectionDescriptor"}>First Name</p>
              <p>{user.getFirstName()}</p>
            </div>
            <div className="detailsSectionRow">
              <p className={"detailsSectionDescriptor"}>Last Name</p>
              <p>{user.getLastName()}</p>
            </div>
            <div className="detailsSectionRow">
              <p className={"detailsSectionDescriptor"}>Email</p>
              <p>{user.getEmail()}</p>
            </div>
            <div className="detailsSectionRow">
              <p className={"detailsSectionDescriptor"}>Phone Number</p>
              <p>{user.getPhoneNumber().getNumber()}</p>
            </div>
            <div className="detailsSectionRow">
              <p className={"detailsSectionDescriptor"}>Address</p>
              <p>{user.getAddress().getStreetAddress()}</p>
            </div>
            <div className="detailsSectionRow">
              <p className={"detailsSectionDescriptor"}>Birthdate</p>
              <p>{user.getDateOfBirth().toDateString()}</p>
            </div>
            <div className={"detailsSectionButtonContainer"}>
              <button className={"FormSubmitButton detailsSectionButton"} onClick={handleEdit}>Edit</button>
              <button className={"FormSubmitButton detailsSectionButton"} onClick={handleLogOut}>Log out</button>
            </div>
          </div>
        ) : (<p>No current user</p>)}
      </div>
    </>
  );
}