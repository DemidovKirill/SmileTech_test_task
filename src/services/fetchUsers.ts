import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/users';

export interface UserAddress {
    street: string;
    zipcode: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    address: UserAddress;
    company: {
        name: string;
    };
}

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>(URL);

        if (!response?.data) {
          throw new Error();
        }
    
        return response.data;
      } catch (error) {
        return [];
      }
};
