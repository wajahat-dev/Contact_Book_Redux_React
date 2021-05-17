import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import store from '../../redux/store'
import Contact from './contact'
import {selectAllContact, clearAllContact, deleteSelectedContact} from '../../redux/contact/contactActions'


const Table = () => {
    const contacts = useSelector((state ) => state.contacts.contacts )
    const [selectAll, setSelectAll] = useState(false);
    const dispatch = useDispatch();
    const selectContacts = useSelector((state)=>{
        return state.contacts.selectedContacts
    })


    useEffect(()=>{
        if(selectAll){
            dispatch(selectAllContact(contacts.map(contact => contact.id)))
        }else{
            dispatch(clearAllContact())
        }
    },[selectAll])

    return (
        
        <div className="col-xs-6">
            {
            selectContacts.length > 0 &&  (
                <button onClick={()=> dispatch(deleteSelectedContact())} className="btn btn-warning mb-2">Delete All</button>
            )
        }
            <table className="table shadow border-0">
                <thead className="bg-danger  py-5 text-white">
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" 
                                className="custom-control-input"
                                id="selectAll"
                                value={selectAll}
                                
                                onClick={()=>{setSelectAll(!selectAll)}}
                                />
                                <label className="custom-control-label"
                                htmlFor="selectAll"
                                ></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                {contacts.map(contact => {
                return(
                    <Contact 
                    key={contact.id}
                    contact={contact}
                    selectAll={selectAll}
                    />
                )

              })}
                   
                   
                </tbody>
            </table>
        </div>
    );
}

export default Table;
