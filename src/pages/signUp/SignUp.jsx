import {User} from "../../model/User";
import "./SignUp.css"
import {NavLink} from "react-router-dom";
import DatePicker from "react-datepicker";
import {useState} from "react";
import { UsersAPI } from "../../api/UsersAPI";
import { PhoneNumber } from "../../model/PhoneNumber";
import { Address } from "../../model/Address";

export default function SignUp() {
    const [birthDate, setBirthDate] = useState(new Date());
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        const user = new User(
          0,
          data.email,
          data.firstName,
          data.lastName,
          new PhoneNumber(
            data.countryCode,
            data.phoneNumber
          ),
          birthDate,
          ["USER"],
          new Address(
            data.country,
            data.address,
            data.zipCode
          )
        )

        UsersAPI.signUp(user, data.password);
    }

    return (
        <div className={"SignUp"} onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <form className={"signup-form"}>
                <div className={"form-group"}>
                    <label htmlFor="email">First Name*</label>
                    <input name="firstName" id="firstName" placeholder={"Ada"}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="lastName">Last Name*</label>
                    <input name="lastName" id="lastName" placeholder={"Lovelace"}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="email">Email*</label>
                    <input name="email" id="email" placeholder={"email@gmail.com"}/>
                </div>

                <div className={"addressGroup"}>
                    <div className={"form-group"}>
                        <label htmlFor="address">Address*</label>
                        <input name="address" id="address" placeholder={"Borgundvegen 222A"}/>
                    </div>
                    <div className={"addressCountryZipCodeGroup"}>
                        <div className={"form-group"}>
                            <label htmlFor={"country"}>Country*</label>
                            <input name="country" id="country" placeholder={"Norway"}/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"zipCode"}>Zip Code*</label>
                            <input name="zipCode" id="zipCode" placeholder={"6002"}/>
                        </div>
                    </div>
                </div>

                <div className={"phoneNumberGroup"}>
                    <div className={"form-group"}>
                        <label htmlFor={"countryCode*"}>Country Code*</label>
                        <input name={"countryCode"} id="countryCode" placeholder={"+47"}/>
                    </div>
                    <div className={"form-group phoneNumber"}>
                        <label htmlFor={"phoneNumber"}>Phone Number*</label>
                        <input name={"phoneNumber"} id="phoneNumber" placeholder={"800 80 000"}/>
                    </div>
                </div>

                <div className={"form-group"}>
                    <label htmlFor="email">Date of birth*</label>
                    <div>
                        <DatePicker className={"signUpDatePicker"} dateFormat={"dd.MM.yyyy"} selected={birthDate} onChange={(date) => setBirthDate(date)}/>
                    </div>
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