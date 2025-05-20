import {useAuth} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import {UsersAPI} from "../../util/api/UsersAPI";
import "./Profile.css"
import {Authentication} from "../../util/api/Authentication";
import {ImageAPI} from "../../util/api/ImageAPI";

export default function Profile() {
    const { isSignedIn } = useAuth();
    const {signOut} = useAuth();
    const [firstLetters, setFirstLetters] = useState("");

    useEffect(() => {
        if (isSignedIn) {
            Authentication.tokenIsValid().then(isValid => {
                if (isValid) {
                    UsersAPI.getCurrentAuthenticatedUser().then(user => {
                        setFirstLetters(user.getFirstName().charAt(0).toUpperCase() + user.getLastName().charAt(0).toUpperCase());
                    });
                } else {
                    signOut();
                }
            });
        }
    }, [isSignedIn, signOut]);

    return (
        <div className={"HeaderProfileButtonContainer"}>
            <div className={"Circle"}>{firstLetters}</div>
        </div>
    )
}