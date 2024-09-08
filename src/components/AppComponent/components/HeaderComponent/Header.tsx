import { memo, useEffect, useState } from "react";
import './Header.scss';
import debounce from "debounce";

interface HeaderProps {
    getUsersList: () => void;
    filterByFirstName: (value: string) => void;
}

const Header = memo(({getUsersList, filterByFirstName}: HeaderProps) => {
    const [filterBy, setFilterBy] = useState('');

    const onInputChange = (value: string) => setFilterBy(value);

    useEffect(() => {
        filterByFirstName(filterBy);
    }, [filterByFirstName, filterBy])

    return (
        <header className="header">
            <h1 className="header__title">
                Список пользователей
            </h1>
            <input
                className="header__filter"
                placeholder="Filter by FirstName"
                type="text"
                value={filterBy}
                onChange={(event) => onInputChange(event?.target?.value)}
                />
            <button type='button' className="header__update-button" onClick={getUsersList}>Обновить</button>
        </header>
    )
});

export default Header;