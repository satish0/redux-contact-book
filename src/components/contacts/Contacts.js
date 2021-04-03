import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import {selectAllContact, clearallContact, deleteallContact} from '../../actions/contactAction';

const Contacts = () => {
    const dispatch = useDispatch();
    const [selectALL, setSelectALL] = useState(false);
    const contacts = useSelector((state) => state.contact.contacts);
    const selectedContacts = useSelector((state) => state.contact.selectedContacts);


    useEffect(() => {
        if(selectALL) {
            dispatch(selectAllContact(contacts.map(contact => contact.id)))
        } else {
            dispatch(clearallContact())
        }
    }, [selectALL])

    return (
        <div>
            {
                selectedContacts.length > 0 ? (
                    <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteallContact())}>Delete All</button>
                ): null
            }
            <table className="table shadow">
                <thead>
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input 
                                id="selectAll" 
                                type="checkbox" 
                                className="custom-control-input"
                                value={selectALL}
                                onClick={() => setSelectALL(!selectALL)} />
                                <label htmlFor="selectAll" className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                        {contacts.map((contact, index) => ( 
                            <Contact contact={contact} key={index} selectALL={selectALL} />
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default Contacts
