import {useAuth} from "../../authcontext/AuthContext";
import {useEffect, useState} from "react";
import {UsersAPI} from "../../api/UsersAPI";
import "./Profile.css"

export default function Profile() {
    const { isSignedIn } = useAuth();
    const [firstLetters, setFirstLetters] = useState("");

    useEffect(() => {
        if (isSignedIn) {
            UsersAPI.getCurrentAuthenticatedUser().then(user => {
                setFirstLetters(user.getFirstName().charAt(0) + user.getLastName().charAt(0));
            })
        }
    }, []);
    return (
        <div className={"HeaderProfileButtonContainer"}>
            <div className={"Circle"}>{firstLetters}</div>
        </div>
    )
}