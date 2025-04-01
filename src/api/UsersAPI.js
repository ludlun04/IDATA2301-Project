import axios from 'axios';
import { Authentication } from './Authentication';
import { User } from '../model/User';

export const UsersAPI = {

  getAllUsers: async () => {
    if (!Authentication.isSignedIn()) {
      throw new Error("User is not signed in");
    }

    const token = Authentication.getToken();
    const result = await axios.get('http://localhost:8080/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const users = result.data.map(user => {
      return new User(
        user.id,
        user.email,
        user.firstName,
        user.lastName,
        user.phoneNumber,
        user.dateOfBirth,
        user.roles
      );
    });
    return users;


  }
}