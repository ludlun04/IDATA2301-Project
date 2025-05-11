import {PhoneNumber} from "../../model/PhoneNumber";
import {Address} from "../../model/Address";
import {CompanyAPI} from "../../api/CompanyAPI";
import {Company} from "../../model/Company";

/**
 * EditCompanyDialogue component
 * A form that allows the user to edit the details of a company.
 * It includes fields for company name, address, and phone number.
 *
 * @param {object} props - The properties passed to the component.
 * @param {function} props.onClose - Function to close the dialogue.
 * @param {Company} props.company - The company object to be edited.
 * @returns {JSX.Element}
 */
const EditCompanyDialogue = (props) => {
  const company = props.company;
  const address = company.getAddress();
  const phoneNumber = company.getPhoneNumber();

  const onCancelEdit = (e) => {
    e.preventDefault();
    props.onClose();
  }

  const onEdit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const newCompany = new Company(
      company.getId(),
      data.companyName,
      new Address(
        data.companyCountry,
        data.companyAddress,
        data.companyZipCode
      ),
      new PhoneNumber(
        data.companyCountryCode,
        data.companyPhoneNumber
      )
    )

    CompanyAPI.updateCompany(newCompany).then(() => {
      console.log("Company updated successfully");
      props.onClose();
      window.location.reload();
    }).catch((error) => {
      console.error("Error updating company:", error);
    });
  }
  return (
    <div className={"Dialogue"}>
      <form onSubmit={onEdit}>
        <h2>Edit Company</h2>
        <div>
          <label htmlFor={"companyName"}>Company Name</label>
          <input type={"text"} id={"companyName"} name={"companyName"}
                 defaultValue={company.getName()}/>
        </div>
        <div>
          <label htmlFor={"companyStreetAddress"}>Street Address</label>
          <input type={"text"} id={"companyAddress"} name={"companyAddress"}
                 defaultValue={address.getStreetAddress()}/>
          <label htmlFor={"companyZipCode"}>Zip Code</label>
          <input type={"text"} id={"companyZipCode"} name={"companyZipCode"}
                 defaultValue={address.getZipCode()}/>
          <label htmlFor={"companyCountry"}>Country</label>
          <input type={"text"} id={"companyCountry"} name={"companyCountry"}
                 defaultValue={address.getCountry()}/>
        </div>
        <div>
          <label htmlFor={"companyCountryCode"}>Country Code</label>
          <input type={"text"} id={"companyCountryCode"} name={"companyCountryCode"}
                 defaultValue={phoneNumber.getCountryCode()}/>
          <label htmlFor={"companyPhoneNumber"}>Phone Number</label>
          <input type={"text"} id={"companyPhoneNumber"} name={"companyPhoneNumber"}
                 defaultValue={phoneNumber.getNumber()}/>
        </div>
        <input type={"submit"} className={"FormSubmitButton"} value={"Save"}/>
        <input type={"button"} className={"FormSubmitButton"} onClick={onCancelEdit}
               value={"Cancel"}/>
      </form>
    </div>
  )
}

export default EditCompanyDialogue;