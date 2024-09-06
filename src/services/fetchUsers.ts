import axios from "axios";
import { User, UserFromApi } from "../types/user";

const URL = 'https://jsonplaceholder.typicode.com/users';

const dataPreprocessing = (users: UserFromApi[]): User[] => {
  return users.map(user => {
    const firstName = user.name.split(' ')[0];
    const lastName = user.name.split(' ')[1];

    return {
      id: user.id,
      firstName: firstName,
      lastName: lastName,
      email: user.email,
      address: {
        street: user.address.street,
        zipcode: user.address.zipcode
      },
      company: {
        name: user.company.name
      }
    }
  });
}

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<UserFromApi[]>(URL);

        if (!response?.data) {
          throw new Error();
        }
    
        return dataPreprocessing(response.data);
      } catch (error) {
        return [];
      }
};
