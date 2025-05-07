import Constants from "../Constants.jsx";
import axios from 'axios';
import {Company} from "../model/Company";
import {PhoneNumber} from "../model/PhoneNumber";
import {Authentication} from "./Authentication";
import {Address} from "../model/Address";

export const CompanyAPI = {

  getCompaniesUsedInCars: async () => {
    try {
      const result = await axios.get(`${Constants.API_URL}/company/with_rentals`, {});

      let companies = [];
      result.data.forEach((companyObject) => {
        companies.push(getCompanyFromJsonObject(companyObject));
      })
      return companies;
    } catch (error) {
      console.error("Error fetching companies:", error);
      throw error;
    }
  },

  getCompanies: async () => {
    try {
      if (Authentication.isSignedIn()) {
        const result = await axios.get(`${Constants.API_URL}/company/all`, {
          headers: {
            'Authorization': `Bearer ${Authentication.getToken()}`
          }
        });

        let companies = [];
        result.data.forEach((companyObject) => {
          companies.push(getCompanyFromJsonObject(companyObject));
        })
        return companies;
      }
    } catch (error) {
      console.error("Error fetching companies:", error);
      throw error;
    }
  },

  getCompanyById: async (id) => {
    try {
      if (Authentication.isSignedIn()) {
        const result = await axios.get(`${Constants.API_URL}/company/${id}`, {
          headers: {
            'Authorization': `Bearer ${Authentication.getToken()}`
          }
        });

        let company = null;
        if (result.data) {
          company = getCompanyFromJsonObject(result.data);
        }
        return company;
      }
    } catch (error) {
      console.error("Error fetching company by ID:", error);
      throw error;
    }
  },

  getCurrentUserCompanies: async () => {
    try {
      if (Authentication.isSignedIn()) {
        const token = Authentication.getToken();
        const result = await axios.get(`${Constants.API_URL}/company/current_user_companies`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        let companies = [];
        result.data.forEach((companyObject) => {
          companies.push(getCompanyFromJsonObject(companyObject));
        })
        return companies;
      }
    } catch (error) {
      console.error("Error fetching current user companies:", error);
      throw error;
    }
  }
}

const getCompanyFromJsonObject = (companyObject) => {
  try {
    const phoneNumberObject = companyObject.phoneNumber;
    const phoneNumber = new PhoneNumber(phoneNumberObject.countryCode, phoneNumberObject.number);
    const addressObject = companyObject.address;
    const address = new Address(addressObject.country, addressObject.streetAddress, addressObject.zipCode);

    return new Company(companyObject.id, companyObject.name, address, phoneNumber);
  } catch (error) {
    console.error("Error creating company from JSON object:", error);
    throw error;
  }
}