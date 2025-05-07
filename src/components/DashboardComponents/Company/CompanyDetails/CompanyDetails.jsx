import "./CompanyDetails.css"

const CompanyDetails = ({company}) => {
    if (!company) {
        return <div>Loading...</div>;
    }

    const address = company.getAddress();
    const phoneNumber = company.getPhoneNumber();




    return (
        <div className={"CompanyDetails"}>
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
            <button>Edit Details</button>
        </div>
    )
}

export default CompanyDetails;