const CompanyDetails = ({company}) => {
    if (!company) {
        return <div>Loading...</div>;
    }

    const address = company.getAddress();
    const phoneNumber = company.getPhoneNumber();




    return (
        <div>
            <div>
                <h1>Company Name</h1>
                <p>{company.getName()}</p>
            </div>
            <div>
                <h1>Company Address</h1>
                <p>{address.getStreetAddress() + " " + address.getZipCode() + " " + address.getCountry()}</p>
            </div>
            <div>
                <h1>Company Phone Number</h1>
                <p>{phoneNumber.getCountryCode() + " " + phoneNumber.getNumber()}</p>
            </div>
        </div>
    )
}

export default CompanyDetails;