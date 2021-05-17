import React from 'react';
import {combineReducers} from 'redux';
import contactReducer from './contact/contactReducer'

const rootReducer = combineReducers({
    contacts: contactReducer
})

export default rootReducer;
