import { useState, useEffect, useCallback } from 'react';
import Table from '../TableComponent/Table';
import { fetchUsers } from '../../services/fetchUsers';
import './App.scss';
import Header from './components/HeaderComponent/Header';
import { User, UserAddress, UserKey, UserKeys } from '../../types/user';
import { handleSort } from '../../utils/utils';
import { SortDirection, SortDirections } from '../../types/sortDirection';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirections.ASC);
  const [sortBy, setSortBy] = useState<UserKey>();

  const getUsersList = async () => {
      setIsLoading(true);
      const usersList = await fetchUsers();
      setUsers(usersList);
      setIsLoading(false);
  }

  const filterList = useCallback(() => {
    const sortedList = users.filter((user) => user.email.includes('.biz'));
    setUsers(sortedList);
  }, [users]);

  const sortList = useCallback((columnName: UserKey) => {
    const direction = sortBy === columnName ? sortDirection : SortDirections.ASC;
    const sortedList = handleSort(users, columnName, direction);
    
    setUsers(sortedList);
    setSortBy(columnName);

    if (!sortBy || sortBy === columnName) {
      changeSortDirection();
    }
  }, [users, sortBy, sortDirection]);

  const changeSortDirection = () => {
    setSortDirection(prev => prev === SortDirections.ASC ? SortDirections.DESC : SortDirections.ASC);
  }

  useEffect(() => {
      getUsersList();
  }, []);

  return (
    <div className="app">
      <Header getUsersList={getUsersList} />
      <Table users={users} loading={isLoading} filterList={filterList} sortList={sortList} />
    </div>
  );
}

export default App;
