import Constants from "../Constants.jsx";
import axios from 'axios';
import {Company} from "../model/Company";
import {PhoneNumber} from "../model/PhoneNumber";
import {Authentication} from "./Authentication";
import {Address} from "../model/Address";
import {CarAPI} from "./CarAPI";

/**
 * API module for handling company-related endpoints.
 */
export const CompanyAPI = {

  /**
   * Fetches all companies that are currently in use.
   *
   * @returns {Promise<Company[]>} A promise that resolves to an array of Company objects.
   * @throws {Error} If there is an error fetching the companies.
   */
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

  /**
   * Fetches all companies.
   *
   * @returns {Promise<Company[]>} A promise that resolves to an array of Company objects.
   * @throws {Error} If there is an error fetching the companies.
   */
  getCompanies: async () => {
    try {
      if (Authentication.isSignedIn()) {
        const result = await axios.get(`${Constants.API_URL}/company`, {
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

  /**
   * Fetches a company by its ID.
   *
   * @param {number} id - The ID of the company to fetch.
   * @returns {Promise<Company|null>} A promise that resolves to a Company object or null if not found.
   * @throws {Error} If there is an error fetching the company.
   */
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

  /**
   * Fetches all companies that the current user is associated with.
   *
   * @returns {Promise<Company[]>} A promise that resolves to an array of Company objects.
   * @throws {Error} If there is an error fetching the companies.
   */
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
  },

  /**
   * Creates a new company.
   *
   * @param {Company} company - The company to create.
   * @returns {Promise<void>} A promise that resolves when the company is created.
   * @throws {Error} If there is an error creating the company.
   */
  updateCompany: async (company) => {
    try {
      if (Authentication.isSignedIn()) {
        const token = Authentication.getToken();
        const jsonObject = getJsonObjectFromCompany(company);
       await axios(`${Constants.API_URL}/company/update`, {
         data: jsonObject,
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

      }
    } catch (error) {
      console.error("Error updating company:", error);
      throw error;
    }
  },

  /**
   * Creates a new company.
   *
   * @param {Company} company - The company to create.
   * @returns {Promise<void>} A promise that resolves when the company is created.
   * @throws {Error} If there is an error creating the company.
   */
  getCarsBelongingToCompany: async (companyId) => {
    try {
      const response = await axios.get(
        `${Constants.API_URL}/company/${companyId}/cars`,
        {}
      );

      const cars = [];
      response.data.forEach(carObject => {
        cars.push(CarAPI.getCarFromJsonObject(carObject));
      })


      console.log(cars);
      return cars;
    } catch (error) {
      console.error("Error fetching cars belonging to company: ", error);
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

const getJsonObjectFromCompany = (company) => {
  console.log(company);
    try {
        return {
        id: company.getId(),
        name: company.getName(),
        address: {
            country: company.getAddress().getCountry(),
            streetAddress: company.getAddress().getStreetAddress(),
            zipCode: company.getAddress().getZipCode()
        },
        phoneNumber: {
            countryCode: company.getPhoneNumber().getCountryCode(),
            number: company.getPhoneNumber().getNumber()
        }
        }
    } catch (error) {
        console.error("Error creating JSON object from company:", error);
        throw error;
    }
}