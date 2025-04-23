import "./DetailsSection.css"
import {useNavigate} from "react-router-dom";
import {Authentication} from "../../../api/Authentication";
import {useAuth} from "../../../authcontext/AuthContext";
export default function DetailsSection(props) {
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const details = [
        ["Company", "AB Rentals"],
        ["Name", "Username"],
        ["Email", "U***e@gmail.com"],
        ["Phone Number", "91902345"],
        ["First Name", "John"],
        ["Last Name", "Doe"],
        ["Address", "Borgundvegen"],
        ["Birthdate", "12.02.1994"]
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