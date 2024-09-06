import { UserKey, UserKeys } from '../../../../types/user';
import './TableHead.scss';

interface TableHeadProps {
    sortList: (columnName: UserKey) => void;
}

const tableHeadTitles = [
    {
        title: 'ID',
        sortKey: UserKeys.ID
    },
    {
        title: 'Имя',
        sortKey: UserKeys.FIRST_NAME
    },
    {
        title: 'Фамилия',
        sortKey: UserKeys.LAST_NAME
    },
    {
        title: 'Email',
        sortKey: UserKeys.EMAIL
    },
    {
        title: 'Адрес',
        sortKey: UserKeys.ADDRESS
    },
    {
        title: 'Компания',
        sortKey: UserKeys.COMPANY
    }
]

const TableHead = ({sortList}: TableHeadProps) => {
    return (
        <thead className="head">
            <tr className="head__line">
                {tableHeadTitles.map((title, index) => {
                    return (
                        <th key={index} className="head__cell">
                            <div>
                                {title.title}
                                <img
                                    className="head__sort-button"
                                    src="sort.svg"
                                    alt="Sort"
                                    onClick={() => sortList(title.sortKey)}
                                />
                            </div>
                        </th>
                    )
                })}
            </tr>
        </thead>
    );
}

export default TableHead;
