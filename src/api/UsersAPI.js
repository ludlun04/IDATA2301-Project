import Constants from "../Constants.jsx";
import axios from 'axios';
import {Authentication} from './Authentication';
import {User} from '../model/User';
import {PhoneNumber} from "../model/PhoneNumber.js";
import {Address} from "../model/Address.js";
import {CarAPI} from "./CarAPI";

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
      return getUserFromJsonObject(user);
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
  },

  getCurrentAuthenticatedUser: async () => {
    if (Authentication.isSignedIn()) {
      const token = Authentication.getToken();
      const result = await axios.get(`${Constants.API_URL}/users/details`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const user = getUserFromJsonObject(result.data);
      return user;
    }
  },

  getCurrentAuthenticatedUserRoles: async () => {
    if (Authentication.isSignedIn()) {
      const token = Authentication.getToken();
      const result = await axios.get(`${Constants.API_URL}/users/roles`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return result.data;
    }

  },

  getFavoritesAmongCars: async (cars) => {
    const carObjects = cars.map(car => {
      return CarAPI.getJsonObjectFromCar(car);
    });

    if (Authentication.isSignedIn()) {
      const token = Authentication.getToken();
      const result = await axios.post(
        `${Constants.API_URL}/users/favorites`,
        carObjects,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          },

        }
      );
      return result.data.map(carObject => {
        return CarAPI.getCarFromJsonObject(carObject);
      })
    } else {
      console.error("Not signed in, can not get favorites");
    }
  },

  setFavorite: async(car, isFavorite) => {
    if (Authentication.isSignedIn()) {
      const token = Authentication.getToken();
      const response = await axios.post(
        `${Constants.API_URL}/users/favorites/alter`,
        {
          carId: car.getId(),
          isFavorite: isFavorite
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      return response.data;
    }

  }
}

function getUserFromJsonObject(userObject) {
  const phoneNumber = new PhoneNumber(userObject.phoneNumber.countryCode, userObject.phoneNumber.number);
  const dateOfBirth = new Date(userObject.dateOfBirth);
  const address = new Address(userObject.address.country, userObject.address.streetAddress, userObject.address.zipCode);

  return new User(
    userObject.id,
    userObject.email,
    userObject.firstName,
    userObject.lastName,
    phoneNumber,
    dateOfBirth,
    userObject.roles.map(role => role.name),
    address
  );
}