import { memo } from 'react';
import { User, UserKey } from '../../types/user';
import './Table.scss';
import TableHead from './components/TableHead/TableHead';
import UserLine from './components/UserLine/UserLine';

interface TableProps {
    users: User[];
    loading: boolean;
    sortList: (columnName: UserKey) => void;
}

const Table = memo((props: TableProps) => {
    const {users, loading, sortList} = props;

    return (
        <table className="table">
            {!loading && (<TableHead sortList={sortList} />)}
            <tbody className="table__body">
                {loading && (
                    <tr className="loader-container">
                        <td className="loader"></td>
                    </tr>
                )}
                {(users && !loading) && users.map((user) => {
                    return (
                        <UserLine
                            key={user.id}
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            address={user.address}
                            company={user.company.name}
                        />
                    )
                })}
            </tbody>
        </table>
    );
})

export default Table;
