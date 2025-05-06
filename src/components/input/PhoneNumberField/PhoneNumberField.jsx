import "./PhoneNumberField.css";

function PhoneNumberField({phoneNumber}) {
  const countryCode = phoneNumber.getCountryCode() || "+47";
  const number = phoneNumber.getNumber() || "";

  return (
    <div className={"PhoneNumberField"}>
      <p>Phone Number</p>
      <div className={"PhoneNumberFieldInputContainer"}>
        <input type="text" name="countryCode" defaultValue={countryCode}/>
        <input type="text" name="phoneNumber" defaultValue={number}/>
      </div>
    </div>
  )
}


export default PhoneNumberField;