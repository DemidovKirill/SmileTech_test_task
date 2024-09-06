import { memo } from 'react';
import { User, UserKey, UserKeys } from '../../types/user';
import './MobileTable.scss';
import UserCard from './components/UserCard/UserCard';

interface MobileTableProps {
    users: User[];
    loading: boolean;
    sortList: (columnName: UserKey) => void;
}

const MobileTable = memo((props: MobileTableProps) => {
    const {users, loading, sortList} = props;

    return (
        <div className="mobile-table">
            <div className="mobile-table__header">
                <span>Sort by:</span>
                <button className="mobile-table__sort-button" onClick={() => sortList(UserKeys.ID)}>ID</button>
                <button className="mobile-table__sort-button" onClick={() => sortList(UserKeys.FIRST_NAME)}>Имя</button>
                <button className="mobile-table__sort-button" onClick={() => sortList(UserKeys.LAST_NAME)}>Фамилия</button>
                <button className="mobile-table__sort-button" onClick={() => sortList(UserKeys.EMAIL)}>Email</button>
                <button className="mobile-table__sort-button" onClick={() => sortList(UserKeys.ADDRESS)}>Адрес</button>
                <button className="mobile-table__sort-button" onClick={() => sortList(UserKeys.COMPANY)}>Компания</button>
            </div>
            <div className="mobile-table__body">
            {loading && (
                    <div className="loader-container">
                        <span className="loader"></span>
                    </div>
                )}
                {(users && !loading) && users.map((user) => {
                    return (
                        <UserCard
                            key={user.id}
                            user={user}
                        />
                    )
            })}
            </div>
        </div>
    );
})

export default MobileTable;
