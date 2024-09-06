import { memo } from "react";
import './Header.scss';

interface HeaderProps {
    getUsersList: () => void;
    filterByFirstName: (value: string) => void;
}

const Header = memo(({getUsersList, filterByFirstName}: HeaderProps) => {
    return (
        <header className="header">
            <h1 className="header__title">
                Список пользователей
            </h1>
            <input
                className="header__filter"
                placeholder="Filter by FirstName"
                type="text"
                onChange={(event) => filterByFirstName(event.target.value)}
                />
            <button type='button' className="header__update-button" onClick={getUsersList}>Обновить</button>
        </header>
    )
});

export default Header;