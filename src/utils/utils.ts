import { User, UserAddress, UserCompany, UserKey, UserKeys } from "../types/user";

export const handleSort = (users: User[], columnName: UserKey, sortDirection: 'asc' | 'desc'): User[] => {
    users.sort((a, b) => {
      let firstOperand = a[columnName];
      let secondOperand = b[columnName];

      if (columnName === UserKeys.ADDRESS) {
        firstOperand = (firstOperand as UserAddress).street;
        secondOperand = (secondOperand as UserAddress).street;
      }

      if (columnName === UserKeys.COMPANY) {
        firstOperand = (firstOperand as UserCompany).name;
        secondOperand = (secondOperand as UserCompany).name;
      }

      if (firstOperand < secondOperand) return -1;
      if (firstOperand > secondOperand) return 1;
      
      return 0;
    })

    return sortDirection === 'asc' ? users : users.reverse();
}