import { PhoneNumber } from "../../../model/PhoneNumber";
import "./PhoneNumberField.css";

/**
 * A component that displays a phone number field.
 * 
 * @param {PhoneNumber} phoneNumber - The phone number object.
 * * @returns {JSX.Element}
 */

function PhoneNumberField({phoneNumber}) {
  const countryCode = phoneNumber.getCountryCode() || "+47";
  const number = phoneNumber.getNumber() || "";

  return (
    <section className={"PhoneNumberField"}>
      <p>Phone Number</p>
      <div className={"PhoneNumberFieldInputContainer"}>
        <input type="text" name="countryCode" defaultValue={countryCode}/>
        <input type="text" name="phoneNumber" defaultValue={number}/>
      </div>
    </section>
  )
}


export default PhoneNumberField;