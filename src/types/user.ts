export enum UserKeys {
    ID = 'id',
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    EMAIL = 'email',
    ADDRESS = 'address',
    COMPANY = 'company'
}

export type UserKey = keyof User;

export interface UserAddress {
    street: string;
    zipcode: string;
}

export interface UserCompany {
    name: string;
}

export interface UserFromApi {
    id: number;
    name: string;
    email: string;
    address: UserAddress;
    company: UserCompany;
}

export interface User extends Omit<UserFromApi, 'name'> {
    firstName: string;
    lastName: string;
}