import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, DELETE_SELECTED_CONTACTS } from '../constant/types'

//actions
export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact,
});


// get a contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
})


// update a contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
})


// delete a contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
})


// selectall a contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
})


// clear selected a contact
export const clearallContact = () => ({
    type: CLEAR_CONTACT,
})



// delect selected a contact
export const deleteallContact = () => ({
    type: DELETE_SELECTED_CONTACTS,
})
