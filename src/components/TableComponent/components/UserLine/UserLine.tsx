import { memo } from 'react';
import './UserLine.scss';
import { UserAddress } from '../../../../types/user';

interface UserLineProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: UserAddress;
    company: string;
}

const UserLine = memo((props: UserLineProps) => {
    const {firstName, lastName, email, address, company, id} = props;

    return (
        <tr className='user'>
            <td className='user__cell user__id'>{id}</td>
            <td className='user__cell user__firstname'>{firstName}</td>
            <td className='user__cell user__lastname'>{lastName}</td>
            <td className='user__cell user__email'>{email}</td>
            <td className='user__cell user__address'>
            {address.street}{' '}{address.zipcode}
            </td>
            <td className='user__cell user__company'>{company}</td>
        </tr>
    );
})

export default UserLine;
