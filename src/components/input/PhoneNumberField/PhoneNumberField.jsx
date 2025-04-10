import "./PhoneNumberField.css";

function PhoneNumberField(params) {

  return (
    <div className={"PhoneNumberField"}>
      <p>Phone Number</p>
      <div className={"PhoneNumberFieldInputContainer"}>
        <input type="number" name="CountryCode" defaultValue={"+47"}/>
        <input type="number" name="PhoneNumber"/>
      </div>
    </div>
  )
}


export default PhoneNumberField;