import Constants from "../Constants.jsx";
import axios from 'axios';
import { Authentication } from './Authentication';
import { User } from '../model/User';
import { PhoneNumber } from "../model/PhoneNumber.js";
import { Address } from "../model/Address.js";

export const UsersAPI = {

  getAllUsers: async () => {
    if (!Authentication.isSignedIn()) {
      throw new Error("User is not signed in");
    }

    const token = Authentication.getToken();
    const result = await axios.get(`${Constants.API_URL}/users`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    let users = result.data.map(user => {
      const phoneNumber = new PhoneNumber(user.phoneNumber.countryCode, user.phoneNumber.number);
      const dateOfBirth = new Date(user.dateOfBirth);
      const address = new Address(user.address.country, user.address.address, user.address.zipCode);

      return new User(
        user.id,
        user.email,
        user.firstName,
        user.lastName,
        phoneNumber,
        dateOfBirth,
        user.roles.map(role => role.name),
        address
      );
    });

    console.log("UsersAPI.getAllUsers: ", users);
    return users;
  },

  signUp: async (user, password) => {
    const result = await axios({
      method: "post",
      url: `${Constants.API_URL}/users/add`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: user.getEmail(),
        username: user.getFirstName(),
        firstName: user.getFirstName(),
        lastName: user.getLastName(),
        phoneNumber: {
          countryCode: user.getPhoneNumber().getCountryCode(),
          number: user.getPhoneNumber().getNumber()
        },
        dateOfBirth: user.getDateOfBirth().getTime(),
        address: {
          country: user.getAddress().getCountry(),
          streetAddress: user.getAddress().getStreetAddress(),
          zipCode: user.getAddress().getStreetAddress()
        },
        password: password
      }
    });

    console.log("UsersAPI.signUp: ", result.request);
  }
}