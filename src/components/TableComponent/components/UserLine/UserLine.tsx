import { memo } from 'react';
import './UserLine.scss';
import { UserAddress } from '../../../../services/fetchUsers';

interface UserLineProps {
    name: string;
    email: string;
    address: UserAddress;
    company: string;
}

const UserLine = memo((props: UserLineProps) => {
    const {name, email, address, company} = props;

    return (
        <tr className='user'>
            <td className='user__cell user__name'>{name}</td>
            <td className='user__cell user__email'>{email}</td>
            <td className='user__cell user__address'>
            {address.street}{' '}{address.zipcode}
            </td>
            <td className='user__cell user__company'>{company}</td>
        </tr>
    );
})

export default UserLine;
