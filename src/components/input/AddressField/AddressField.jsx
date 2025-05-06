import "./AddressField.css";

const AddressField = ({ address }) => {
  return (
    <div className={"AddressField"}>
      <div className={"AddressFieldInputContainer"}>
        <div>
          <label htmlFor="addressCountry">Country</label>
          <input type="text" name="addressCountry" defaultValue={address.getCountry()} />
        </div>
        <div><label htmlFor="addressStreetAddress">Street Address</label>
          <input type="text" name="addressStreetAddress" defaultValue={address.getStreetAddress()} /></div>
        <div className={"Zip"}>
          <label htmlFor="addressCountry">Zip</label>
          <input type="text" name="addressZipCode" defaultValue={address.getZipCode()} />
        </div>
      </div>
    </div>
  );
}

export default AddressField;