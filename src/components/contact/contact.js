import React, {useState} from 'react';
import Avatar from 'react-avatar'
import {deleteContact} from "../../redux/contact/contactActions"
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const Contact = ({ contact, selectAll }) => {
    const dispatch = useDispatch();
  
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input checked={selectAll} type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>
                <Avatar className="mr-5" round size="45" name="Wim Mostmans" />
            &nbsp;&nbsp;{contact.name}
            </td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td className="actions">
                <Link to={`/contact/edit/${contact.id}`}  >
                    <span className="material-icons text-danger">edit</span>
                </Link>
                &nbsp;
                
                    <span onClick={()=>{
                
                dispatch(deleteContact(contact.id))
            }} className="material-icons">remove_circle</span>
              
            </td>
        </tr>
    );
}

export default Contact;
