interface HeaderProps {
    getUsersList: () => void;
}

const Header = ({getUsersList}: HeaderProps) => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                Список пользователей
            </h1>
            <button type='button' className="app__update-button" onClick={getUsersList}>Обновить</button>
        </header>
    )
};

export default Header;