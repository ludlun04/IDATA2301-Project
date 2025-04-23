import Constants from "../Constants.jsx";
import axios from 'axios';
import {Company} from "../model/Company";
import {PhoneNumber} from "../model/PhoneNumber";

export const CompanyAPI = {

  getCompaniesUsedInCars: async () => {
    const result = await axios.get(`${Constants.API_URL}/company/with_rentals`, {});

    let companies = [];
    result.data.forEach((companyObject) => {
      companies.push(getCompanyFromJsonObject(companyObject));
    })
    return companies;
  }

}

const getCompanyFromJsonObject = (companyObject) => {
  const phoneNumberObject = companyObject.phoneNumber;
  const phoneNumber = new PhoneNumber(phoneNumberObject.countryCode, phoneNumberObject.number);

  return new Company(companyObject.id, companyObject.name, companyObject.address, phoneNumber);
}