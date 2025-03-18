import "./SignUp.css"
import {NavLink} from "react-router-dom";
import DatePickerField from "../../components/DatePickerField/DatePickerField";

export default function SignUp() {
    return (
        <div className={"SignUp"}>
            <h1>Sign Up</h1>
            <form className={"signup-form"}>
                <div className={"form-group"}>
                    <label htmlFor="email">First Name*</label>
                    <input name="firstName" id="firstName" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="lastName">Last Name*</label>
                    <input name="lastName" id="lastName" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="email">Email*</label>
                    <input name="email" id="email" />
                </div>

                <div className={"addressGroup"}>
                    <div className={"form-group"}>
                        <label htmlFor="address">Address*</label>
                        <input name="address" id="address" />
                    </div>
                    <div className={"addressCountryZipCodeGroup"}>
                        <div className={"form-group"}>
                            <label htmlFor={"country"}>Country*</label>
                            <input name="country" id="country" />
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"zipCode"}>Zip Code*</label>
                            <input name="zipCode" id="zipCode" />
                        </div>
                    </div>
                </div>

                <div className={"phoneNumberGroup"}>
                    <div className={"form-group"}>
                        <label htmlFor={"countryCode*"}>Country Code*</label>
                        <input name={"countryCode"} id="countryCode" />
                    </div>
                    <div className={"form-group phoneNumber"}>
                        <label htmlFor={"phoneNumber"}>Phone Number*</label>
                        <input name={"phoneNumber"} id="phoneNumber" />
                    </div>
                </div>

                <div className={"form-group"}>
                    <label htmlFor="email">Date of birth*</label>
                    <DatePickerField />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="password">Password*</label>
                    <input name="password" id="password" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="password">Repeat Password*</label>
                    <input name="passwordRepeat" id="passwordRepeat" />
                </div>
                <input className={"FormSubmitButton"} type="submit" value="Sign Up" />
                <p>Already have an account?
                    <NavLink className={"signInNavLink"} to={"/sign-in"}>Login!</NavLink>
                </p>
            </form>
        </div>
    )
}