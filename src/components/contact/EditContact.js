import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getContact,editContact} from  "../../redux/contact/contactActions"
import {useHistory, useParams} from 'react-router-dom'


const EditContact = () => {
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contacts.contact)
    const {id} = useParams()
    const history = useHistory()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    
  

    useEffect(()=>{
        if(contact != null ){
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(+id))
   
    },[contact])

    const updateContact = (e)=>{
        e.preventDefault();
        const editedContact = {
            "id": +id,
            "name": name,
            "email": email,
            "phone": phone
        }
        dispatch(editContact(editedContact))
        history.push("/")
    }

    return (
        <div className="card shadow">

            <div className="card-header bg-danger">
                <span className="text-info">Add a Contact</span>
            </div>
            <div className="card-body">
                <form onSubmit={updateContact}>
                    <div className="mb-3">
                        <input type="text" 
                        value={name}
                        placeholder="Enter Your Name"
                         className="form-control"  
                        onChange={(e)=> setName(e.target.value)}
                         />
                    </div>
                    <div className="mb-3">
                        <input
                        placeholder="Enter Your Phone" 
                        className="form-control" 
                        name="phone"  
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                       />
                    </div>
                    <div className="mb-3">
                        <input type="email"
                        value={email}
                        placeholder="Enter Your E-mail Address" 
                        className="form-control"
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">Create Contact</button>
                </form>

            </div>

        </div>
    );
}

export default EditContact;
