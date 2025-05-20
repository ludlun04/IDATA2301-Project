import {User} from "../../model/User";
import "./SignUp.css"
import {NavLink, useNavigate} from "react-router-dom";
import DatePicker from "react-datepicker";
import {useEffect, useState} from "react";
import { UsersAPI } from "../../api/UsersAPI";
import { PhoneNumber } from "../../model/PhoneNumber";
import { Address } from "../../model/Address";

export default function SignUp() {
    const navigate = useNavigate();
    const [birthDate, setBirthDate] = useState(new Date());
    const [firstNameIsValid, setFirstNameIsValid] = useState(true);
    const [lastNameIsValid, setLastNameIsValid] = useState(true);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [addressIsValid, setAddressIsValid] = useState(true);
    const [countryIsValid, setCountryIsValid] = useState(true);
    const [zipCodeIsValid, setZipCodeIsValid] = useState(true);
    const [countryCodeIsValid, setCountryCodeIsValid] = useState(true);
    const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [secondPasswordIsValid, setSecondPasswordIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const isFormValid = firstNameIsValid && lastNameIsValid && emailIsValid && addressIsValid && countryIsValid && zipCodeIsValid && countryCodeIsValid && phoneNumberIsValid && secondPasswordIsValid && passwordIsValid;
        setFormIsValid(isFormValid);
    }, [firstNameIsValid, lastNameIsValid, emailIsValid, addressIsValid, countryIsValid, zipCodeIsValid, countryCodeIsValid, phoneNumberIsValid, passwordIsValid, secondPasswordIsValid]);
    
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

        UsersAPI.signUp(user, data.password).then(r => {})
        .then(() => {
            navigate("/sign-in");
        })
        .catch(error => {setErrorMessage("Network error. Unable to reach server."); console.log(error);});
    }

    useEffect(() => {
        const isFormValid = firstNameIsValid && lastNameIsValid && emailIsValid && addressIsValid && countryIsValid && zipCodeIsValid && countryCodeIsValid && phoneNumberIsValid && passwordIsValid && secondPasswordIsValid;
        setFormIsValid(isFormValid);
    }, [firstNameIsValid, lastNameIsValid, emailIsValid, addressIsValid, countryIsValid, zipCodeIsValid, countryCodeIsValid, phoneNumberIsValid, passwordIsValid, secondPasswordIsValid]);

    const handleFirstNameInputChange = (event) => {
        const isValid = !isEmpty(event.target.value);
        setFirstNameIsValid(isValid);
    }

    const handleLastNameInputChange = (event) => {
        const isValid = !isEmpty(event.target.value);
        setLastNameIsValid(isValid);
    }

    const handleEmailInputChange = (event) => {
        const value = event.target.value;
        let isValid = false;
        if (value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            isValid = true;
        }
        setEmailIsValid(isValid);
    }

    const handleAddressInputChange = (event) => {
        const isValid = !isEmpty(event.target.value);
        setAddressIsValid(isValid);
    }

    const handleCountryInputChange = (event) => {
        const isValid = !isEmpty(event.target.value);
        setCountryIsValid(isValid);
    }

    const handleZipCodeInputChange = (event) => {
        const isValid = !isEmpty(event.target.value) && event.target.value > 0 && event.target.value < 99999;
        setZipCodeIsValid(isValid);
    }

    const handleCountryCodeInputChange = (event) => {
        const isValid = !isEmpty(event.target.value) && event.target.value > 0 && event.target.value < 999;
        setCountryCodeIsValid(isValid);
    }

    const handlePhoneNumberInputChange = (event) => {
        const isValid = !isEmpty(event.target.value) && event.target.value > 0 && event.target.value < 999999999999999;
        setPhoneNumberIsValid(isValid);
    }

    const handlePasswordInputChange = (event) => {
        const isValid = !isEmpty(event.target.value);
        setPasswordIsValid(isValid);
        const isSecondPasswordValid = !isEmpty(document.getElementById("passwordRepeat").value) && document.getElementById("passwordRepeat").value === event.target.value;
        setSecondPasswordIsValid(isSecondPasswordValid);
    }

    const handleSecondPasswordInputChange = (event) => {
        const isValid = !isEmpty(event.target.value) && event.target.value === document.getElementById("password").value;
        setSecondPasswordIsValid(isValid);
    }

    const isEmpty = (value) => {
        return value.length === 0;
    }

    return (
        <div className={"SignUp"} onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <form className={"signup-form"}>
                <div className={"form-group"}>
                    <label htmlFor="email">First Name*</label>
                    <input name="firstName" id="firstName" placeholder={"Ada"} onChange={handleFirstNameInputChange} className={firstNameIsValid ? "valid" : "invalid"}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="lastName">Last Name*</label>
                    <input name="lastName" id="lastName" placeholder={"Lovelace"} onChange={handleLastNameInputChange} className={lastNameIsValid ? "valid" : "invalid"}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="email">Email*</label>
                    <input name="email" id="email" placeholder={"email@gmail.com"} onChange={handleEmailInputChange} className={emailIsValid ? "valid" : "invalid"}/>
                </div>

                <div className={"addressGroup"}>
                    <div className={"form-group"}>
                        <label htmlFor="address">Address*</label>
                        <input name="address" id="address" placeholder={"Borgundvegen 222A"} onChange={handleAddressInputChange} className={addressIsValid ? "valid" : "invalid"}/>
                    </div>
                    <div className={"addressCountryZipCodeGroup"}>
                        <div className={"form-group"}>
                            <label htmlFor={"country"}>Country*</label>
                            <input name="country" id="country" placeholder={"Norway"} onChange={handleCountryInputChange} className={countryIsValid ? "valid" : "invalid"}/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"zipCode"}>Zip Code*</label>
                            <input name="zipCode" id="zipCode" placeholder={"6002"} onChange={handleZipCodeInputChange} className={zipCodeIsValid ? "valid" : "invalid"}/>
                        </div>
                    </div>
                </div>

                <div className={"phoneNumberGroup"}>
                    <div className={"form-group"}>
                        <label htmlFor={"countryCode*"}>Country Code*</label>
                        <input name={"countryCode"} id="countryCode" placeholder={"47"} onChange={handleCountryCodeInputChange} className={countryCodeIsValid ? "valid" : "invalid"}/>
                    </div>
                    <div className={"form-group phoneNumber"}>
                        <label htmlFor={"phoneNumber"}>Phone Number*</label>
                        <input name={"phoneNumber"} id="phoneNumber" placeholder={"800 80 000"} onChange={handlePhoneNumberInputChange} className={phoneNumberIsValid ? "valid" : "invalid"}/>
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
                    <input type="password" name="password" id="password" onChange={handlePasswordInputChange} className={passwordIsValid ? "valid" : "invalid"}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="password">Repeat Password*</label>
                    <input type="password" name="passwordRepeat" id="passwordRepeat" onChange={handleSecondPasswordInputChange} className={secondPasswordIsValid ? "valid" : "invalid"}/>
                </div>
                <input className={formIsValid ? "FormSubmitButton" : "FormSubmitButton disabled"} type="submit" value="Sign Up" disabled={!formIsValid}/>
                <p>{errorMessage}</p>
                <p>Already have an account?
                    <NavLink className={"signInNavLink"} to={"/sign-in"}>Login!</NavLink>
                </p>
            </form>
        </div>
    )
}