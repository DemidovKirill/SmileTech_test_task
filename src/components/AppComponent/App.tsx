import { useState, useEffect } from 'react';
import Table from '../TableComponent/Table';
import './App.scss';
import { fetchUsers, User } from '../../services/fetchUsers';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getUsersList = async () => {
      setLoading(true);
      const usersList = await fetchUsers();
      setUsers(usersList);
      setLoading(false);
  }

  useEffect(() => {
      getUsersList();
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">
          Список пользователей
        </h1>
        <button type='button' className="app__update-button" onClick={getUsersList}>Обновить</button>
      </header>
      <Table users={users} loading={loading} />
    </div>
  );
}

export default App;
