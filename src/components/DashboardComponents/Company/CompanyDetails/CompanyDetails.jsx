const CompanyDetails = ({company}) => {
    if (!company) {
        return <div>Loading...</div>;
    }

    const address = company.getAddress();
    const phoneNumber = company.getPhoneNumber();




    return (
        <div>
            <div>
                <h3>Company Name</h3>
                <p>{company.getName()}</p>
            </div>
            <div>
                <h3>Company Address</h3>
                <p>{address.getStreetAddress() + " " + address.getZipCode() + " " + address.getCountry()}</p>
            </div>
            <div>
                <h3>Company Phone Number</h3>
                <p>{phoneNumber.getCountryCode() + " " + phoneNumber.getNumber()}</p>
            </div>
        </div>
    )
}

export default CompanyDetails;