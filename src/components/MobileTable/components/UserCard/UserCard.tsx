import { memo } from 'react';
import { User } from '../../../../types/user';
import './UserCard.scss';


interface UserCardProps {
    user: User;
}

const UserCard = memo((props: UserCardProps) => {
    const { user } = props;

    return (
        <div className="card">
            <div className="card__row">
                <span className="card__title">ID</span>
                <span className="card__value">{user.id}</span>
            </div>
            <div className="card__row">
                <span className="card__title">Имя</span>
                <span className="card__value">{user.firstName}</span>
            </div>
            <div className="card__row">
                <span className="card__title">Фамилия</span>
                <span className="card__value">{user.lastName}</span>
            </div>
            <div className="card__row">
                <span className="card__title">Email</span>
                <span className="card__value">{user.email}</span>
            </div>
            <div className="card__row">
                <span className="card__title">Адрес</span>
                <span className="card__value">
                    {user.address.street}{' '}{user.address.zipcode}
                </span>
            </div>
            <div className="card__row">
                <span className="card__title">Компания</span>
                <span className="card__value">{user.company.name}</span>
            </div>
        </div>
    );
})

export default UserCard;
