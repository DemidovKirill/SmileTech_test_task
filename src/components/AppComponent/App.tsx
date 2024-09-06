import { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive'
import Table from '../TableComponent/Table';
import { fetchUsers } from '../../services/fetchUsers';
import './App.scss';
import Header from './components/HeaderComponent/Header';
import { User, UserKey } from '../../types/user';
import { handleSort } from '../../utils/utils';
import { SortDirection, SortDirections } from '../../types/sortDirection';
import MobileTable from '../MobileTable/MobileTable';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [displayedUsers, setDisplayedUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirections.ASC);
  const [sortBy, setSortBy] = useState<UserKey>();
  const isMobile = useMediaQuery({
    query: '(max-width: 845px)'
  })

  const getUsersList = useCallback(async () => {
      setIsLoading(true);
      const usersList = await fetchUsers();
      setUsers(usersList);
      setDisplayedUsers(usersList);
      setIsLoading(false);
  }, [])

  const filterByFirstName = useCallback((value: string) => {
    const sortedList = users.filter((user) => user.firstName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    setDisplayedUsers(sortedList);
  }, [users]);

  const sortList = useCallback((columnName: UserKey) => {
    const direction = sortBy === columnName ? sortDirection : SortDirections.ASC;
    const sortedList = handleSort(displayedUsers, columnName, direction);

    setDisplayedUsers(sortedList);
    setSortBy(columnName);

    if (!sortBy || sortBy === columnName) {
      changeSortDirection();
    }
  }, [displayedUsers, sortBy, sortDirection]);

  const changeSortDirection = () => {
    setSortDirection(prev => prev === SortDirections.ASC ? SortDirections.DESC : SortDirections.ASC);
  }

  useEffect(() => {
      getUsersList();
  }, [getUsersList]);

  return (
    <div className="app">
      <Header getUsersList={getUsersList} filterByFirstName={filterByFirstName} />
      {isMobile 
      ? (<MobileTable users={displayedUsers} loading={isLoading} sortList={sortList} />) 
      : (<Table users={displayedUsers} loading={isLoading} sortList={sortList} />)}
    </div>
  );
}

export default App;
