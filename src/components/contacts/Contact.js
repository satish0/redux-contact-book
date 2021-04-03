import React from 'react';
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/contactAction';
import { useDispatch } from 'react-redux';

const Contact = ({contact, selectALL}) => {
    const dispatch = useDispatch();
    const { name, phone, email, id } = contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input checked={selectALL} type="checkbox" className="custom-control-input" />
                    <label htmlFor="" className="custom-control-label"></label>
                </div>
            </td>
            <td>
                <Avatar name={name} size="45" round={true} className="mr-2" /> {name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons mr-2">edit</span>
                </Link>
                <Link>
                    <span className="material-icons text-danger" onClick={() => dispatch(deleteContact(id))}>remove_circle</span>
                </Link>
            </td>
        </tr>
    )
}

export default Contact
