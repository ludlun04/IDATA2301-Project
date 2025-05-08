import "./CompanyDetails.css"
import {useState} from "react";
import EditCompanyDialogue from "../../EditCompanyDialogue";
import {createPortal} from "react-dom";

const CompanyDetails = ({company}) => {
    const [portal, setPortal] = useState(<></>);
    if (!company) {
        return <div>Loading...</div>;
    }

    const address = company.getAddress();
    const phoneNumber = company.getPhoneNumber();

    let onClose = () => {
        setPortal(<></>);
    }

    let editCompany = () => {
        setPortal(createPortal(<EditCompanyDialogue onClose={onClose} company={company} />, document.body));
    }



    return (
        <div className={"CompanyDetails"}>
            {portal}
            <div className={"DetailsColumn"}>
                <h3>Company Name</h3>
                <p>{company.getName()}</p>
            </div>
            <div className={"DetailsColumn"}>
                <h3>Company Address</h3>
                <p>{address.getStreetAddress() + " " + address.getZipCode() + " " + address.getCountry()}</p>
            </div>
            <div className={"DetailsColumn"}>
                <h3>Company Phone Number</h3>
                <p>{phoneNumber.getCountryCode() + " " + phoneNumber.getNumber()}</p>
            </div>
            <button onClick={editCompany}>Edit Details</button>
        </div>
    )
}

export default CompanyDetails;