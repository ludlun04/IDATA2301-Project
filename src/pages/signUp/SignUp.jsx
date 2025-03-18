import "./SignUp.css"
import {NavLink} from "react-router-dom";

export default function SignUp() {
    return (
        <div className={"SignUp"}>
            <h1>Sign Up</h1>
            <form className={"signin-form"}>
                <div className={"form-group"}>
                    <label htmlFor="email">First Name*</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="email">Last Name*</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="email">Address*</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={"form-group phoneNumber"}>
                    <div className={"phoneNumberGroup countryCode"}>
                        <label htmlFor="email">Country Code*</label>
                        <input className={"countryCodeInput"} type="countryCode" name="countryCode" id="countryCode" />
                    </div>
                    <div className={"phoneNumberGroup"}>
                        <label htmlFor="email">Phone Number*</label>
                        <input type="phoneNumber" name="phoneNumber" id="phoneNumber" />
                    </div>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="email">Date of birth*</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="email">Password*</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="password">Repeat Password*</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input className={"FormSubmitButton"} type="submit" value="Sign Up" />
                <p>Already have an account?
                    <NavLink className={"signInNavLink"} to={"/sign-in"}>Login!</NavLink>
                </p>
            </form>
        </div>
    )
}