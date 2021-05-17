import {
    ADD_CONTACT, 
    DELETE_CONTACT,
    EDIT_CONTACT, 
    GET_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    DELETE_SELECTED_CONTACT

} from './contactTypes'

export const addContact = (newContact)=>{
    return {
        type: ADD_CONTACT,
        payload: newContact
    }
}

export const deleteContact = (id)=>{
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}


export const editContact = (id)=>{
    return {
        type: EDIT_CONTACT,
        payload: id
    }
}


export const getContact = (id)=>{
    return {
        type: GET_CONTACT,
        payload: id
    }
}

export const selectAllContact = (id)=>{
    return {
        type: SELECT_CONTACT,
        payload: id
    }
}


export const clearAllContact = ()=> ({
    type: CLEAR_CONTACT
})

export const deleteSelectedContact = ()=> ({
    type: DELETE_SELECTED_CONTACT
})