import Constants from "../../Constants.jsx";
import axios from 'axios';
import {Authentication} from './Authentication';
import {User} from '../../model/User';
import {PhoneNumber} from "../../model/PhoneNumber.js";
import {Address} from "../../model/Address.js";
import {CarAPI} from "./CarAPI";

/**
 * API module for handling user-related endpoints.
 */
export const UsersAPI = {
  /**
   * Fetches all users.
   *
   * @returns {Promise<User[]>} A promise that resolves to an array of User objects.
   * @throws {Error} If there is an error fetching the users.
   */
  getAllUsers: async () => {
    try {
      if (!Authentication.hasToken()) {
        throw new Error("User is not signed in");
      }

      const token = Authentication.getToken();
      const result = await axios.get(`${Constants.API_URL}/user`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      let users = result.data.map(user => {
        return UsersAPI.getUserFromJsonObject(user);
      });

      console.log("UsersAPI.getAllUsers: ", users);
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  /**
   * Signs up a new user.
   * 
   * @param {User} user - The user object containing user details.
   * @param {string} password - The password for the new user.
   * @throws {Error} If there is an error signing up the user.
   */
  signUp: async (user, password) => {
    try {
      const result = await axios({
        method: "post",
        url: `${Constants.API_URL}/user/add`,
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
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  },

  /**
   * Updates the details of an existing user.
   * 
   * @param {User} user - The user object containing updated user details.
   * @returns {Promise<void>} A promise that resolves when the user is updated.
   * @throws {Error} If there is an error updating the user.
  */
  updateUser: async (user) => {
    if (!Authentication.hasToken()) {
      throw new Error("User is not signed in");
    }

    const data = {
      email: user.getEmail(),
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
      roles: user.getRoles()
    }

    const token = Authentication.getToken();
    return await axios({
      method: "put",
      url: `${Constants.API_URL}/user/${user.getId()}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: data
    }).then((response) => {
      console.log("UsersAPI.updateUser: ", response.data);
    });
  },

  /**
   * Fetches the current authenticated user.
   * 
   * @returns {Promise<User>} A promise that resolves to the User object of the current authenticated user.
   * @throws {Error} If there is an error fetching the current user.
  */
  getCurrentAuthenticatedUser: async () => {
    try {
      if (Authentication.hasToken()) {
        const token = Authentication.getToken();
        const result = await axios.get(`${Constants.API_URL}/user/details`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const user = UsersAPI.getUserFromJsonObject(result.data);
        return user;
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
      throw error;
    }
  },

  /**
   * Fetches the roles of the current authenticated user.
   * 
   * @returns {Promise<string[]>} A promise that resolves to an array of role names.
   * @throws {Error} If there is an error fetching the user roles.
   */
  getCurrentAuthenticatedUserRoles: async () => {
    try {
      if (Authentication.hasToken()) {
        const token = Authentication.getToken();
        const result = await axios.get(`${Constants.API_URL}/user/roles`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        return result.data;
      }
    } catch (error) {
      console.error("Error fetching current user roles:", error);
      throw error;
    }

  },

  /**
   * Fetches the favorite cars of the current authenticated user.
   * 
   * @param {Car[]} cars - An array of Car objects to check for favorites.
   * @returns {Promise<Car[]>} A promise that resolves to an array of favorite Car objects.
   * @throws {Error} If there is an error fetching the favorite cars.
   */
  getFavoritesAmongCars: async (cars) => {
    try {
      const carObjects = cars.map(car => {
        return CarAPI.getJsonObjectFromCar(car);
      });

      if (Authentication.hasToken()) {
        const token = Authentication.getToken();
        const result = await axios.post(
          `${Constants.API_URL}/user/favorites`,
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
    } catch (error) {
      console.error("Error fetching favorites:", error);
      throw error;
    }
  },

  /**
   * Sets the favorite status of a car for the current authenticated user.
   * 
   * @param {Car} car - The Car object to set as favorite or not.
   * @param {boolean} isFavorite - True to set as favorite, false to remove from favorites.
   * @returns {Promise<void>} A promise that resolves when the favorite status is set.
   * @throws {Error} If there is an error setting the favorite status.
  */
  setFavorite: async (car, isFavorite) => {
    try {
      if (Authentication.hasToken()) {
        const token = Authentication.getToken();
        const response = await axios.post(
          `${Constants.API_URL}/user/favorites/alter`,
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
    } catch (error) {
      console.error("Error setting favorite:", error);
      throw error;
    }

  },

  /**
   * Fetches the user object from a JSON object.
   * 
   * @param {Object} userObject - The JSON object representing a user.
   * @returns {User} The User object created from the JSON object.
   * @throws {Error} If there is an error creating the User object.
   */
  getUserFromJsonObject: (userObject) => {
    try {
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
    } catch (error) {
      console.error("Error creating user from JSON object:", error);
      throw error;
    }
  }
}

