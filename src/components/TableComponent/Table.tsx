import {User} from '../../services/fetchUsers';
import './Table.scss';
import UserLine from './components/UserLine/UserLine';

interface TableProps {
    users: User[];
    loading: boolean;
}

const Table = ({users, loading}: TableProps) => {
    if (loading) {
        return (
            <span className="loader"></span>
        )
    }

    return (
        <table className="table">
            <thead className="table__head">
                <tr className="head__line">
                    <th className="head__cell">ФИО</th>
                    <th className="head__cell">Email</th>
                    <th className="head__cell">Адрес</th>
                    <th className="head__cell">Компания</th>
                </tr>
            </thead>
            <tbody className="table__body">
                {users && users.map((user) => {
                    return (
                        <UserLine
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address}
                            company={user.company.name}
                        />
                    )
                })}
            </tbody>
        </table>
    );
}

export default Table;
