import "./SignIn.css"
import {NavLink} from "react-router-dom";

export default function SignIn() {
    return (
        <div className={"SignIn"}>
            <h1>Login</h1>
            <form className={"signin-form"}>
                <div className={"form-group"}>
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="password">Password*</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input className={"FormSubmitButton"} type="submit" value="Login" />
                <p>Don't have a user yet?
                    <NavLink className={"signUpNavLink"} to={"/sign-up"}>Create one!</NavLink>
                </p>
            </form>
        </div>
    )
}