import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {addContact} from  "../../redux/contact/contactActions"
import {useHistory} from 'react-router-dom'

const AddContact = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


    const nameHandler = (e)=>{
        setName(e.target.value)
    }
    
    const emailHandler = (e)=>{
        setEmail(e.target.value)
    }

    const phoneHandler = (e)=>{
        setPhone(e.target.value)
    }

    const submitHanlder = (e)=>{
        e.preventDefault();
        const newContact = {
            "id": Math.floor(Math.random() * 100000000),
            "name": name,       
            "email": email,
            "phone": phone,
        }
        dispatch(addContact(newContact))
        setName("");setEmail("");setPhone("")
        history.push("/")
    }


    return (
        <div className="card shadow">

            <div className="card-header bg-danger">
                <span className="text-info">Add a Contact</span>
            </div>
            <div className="card-body">
                <form onSubmit={submitHanlder}>
                    <div className="mb-3">
                        <input type="text" 
                        onChange={nameHandler} 
                        placeholder="Enter Your Name"
                         className="form-control"  
                         value={name}
                         />
                    </div>
                    <div className="mb-3">
                        <input type="tel" onChange={phoneHandler} 
                        placeholder="Enter Your Phone" 
                        className="form-control" 
                        name="phone"  
                        value={phone}
                       />
                    </div>
                    <div className="mb-3">
                        <input type="email"
                        onChange={emailHandler}  
                        placeholder="Enter Your E-mail Address" 
                        className="form-control"
                        value={email}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Contact</button>
                </form>

            </div>

        </div>
    );
}

export default AddContact;
