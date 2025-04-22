import "./AddressField.css";

const AddressField = ({ address }) => {
  return (
    <div className={"AddressField"}>
      <div className={"AddressFieldInputContainer"}>
        <div>
          <label htmlFor="AddressCountry">Country</label>
          <input type="text" name="AddressCountry" value={address.getCountry()} />
        </div>
        <div><label htmlFor="AddressCountry">Street Address</label>
          <input type="text" name="AddressStreetAddress" value={address.getStreetAddress()} /></div>
        <div className={"Zip"}>
          <label htmlFor="AddressCountry">Zip</label>
          <input type="text" name="AddressZipCode" value={address.getZipCode()} />
        </div>
      </div>
    </div>
  );
}

export default AddressField;