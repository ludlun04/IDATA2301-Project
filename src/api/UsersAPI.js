import Constants from "../Constants.jsx";
import axios from 'axios';
import { Authentication } from './Authentication';
import { User } from '../model/User';

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

    let users = [];

    for (let i = 0; i < result.data.length; i++) {
      const user = result.data[i];
      users.push(new User(
        i,
        user.email,
        user.firstName,
        user.lastName,
        user.phoneNumber.number,
        user.dateOfBirth,
        user.roles.map(role => role.name)
      ));
    }

    console.log(result.data);

    return users;


  }
}