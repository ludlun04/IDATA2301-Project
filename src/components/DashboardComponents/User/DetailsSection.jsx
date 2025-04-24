import "./DetailsSection.css"
import {useNavigate} from "react-router-dom";
import {Authentication} from "../../../api/Authentication";
import {useAuth} from "../../../authcontext/AuthContext";
import {useEffect, useState} from "react";
import {UsersAPI} from "../../../api/UsersAPI";
export default function DetailsSection(props) {
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const { isSignedIn } = useAuth();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [birthdate, setBirthdate] = useState("");

    useEffect(() => {
        if (isSignedIn) {
            UsersAPI.getCurrentAuthenticatedUser().then(user => {
                setFirstName(user.getFirstName());
                setLastName(user.getLastName());
                setEmail(user.getEmail());
                setPhoneNumber(user.getPhoneNumber().getNumber());
                setAddress(user.getAddress().getStreetAddress());
                setBirthdate(user.getDateOfBirth().toDateString());
            })
        }
    }, []);

    const details = [
        ["First Name", firstName],
        ["Last Name", lastName],
        ["Email", email],
        ["Phone Number", phoneNumber],
        ["Address", address],
        ["Birthdate", birthdate]
    ];

    const handleLogOut = () => {
        navigate("/sign-in")
        Authentication.logout();
        signOut();
    }

  return (
    <div className={props.className} style={props.style}>
      <div className="DetailsSection">
        {details.map((row, index) => (
          <div key={index} className="detailsSectionRow">
            <p className={"detailsSectionDescriptor"}>{row[0]}</p>
            <p>{row[1]}</p>
          </div>
        ))}
        <div className={"detailsSectionButtonContainer"}>
          <button className={"FormSubmitButton detailsSectionButton"} onClick={props.onEdit}>Edit</button>
          <button className={"FormSubmitButton detailsSectionButton"} onClick={handleLogOut}>Log out</button>
        </div>
      </div>
    </div>

  );
}