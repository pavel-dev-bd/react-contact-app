import React, { useState,useEffect } from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useContext } from 'react';
import { ContactContext } from '../context/contexProvier.jsx';
export default function ContactFrom() {
   const {id}=useParams();
   const navigate=useNavigate();  
   const [contact,setContact]=useState({});
     const { updateContact ,fetchContacts} = useContext(ContactContext);
   const [data,setData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        address:'',
    })
    const formHandeler=(e)=>{
        const name=e.target.name
        const value=e.target.value
        console.log(e.target)
        setData({...data,[name]: value})
    
    }
    
    const HandelSubmit=(e)=>{
      
        const addcontact=async()=>{
            if(!data.firstName || !data.lastName || !data.email || !data.phone || !data.address){
                alert("All field are required");
                return;
            }
            const res=await axios.post('https://contact-app-cdr6.onrender.com/contacts',data);
            const rendomId=Math.floor(Math.random()*10000)+1;
            res.data.id=rendomId;
            setData({
                firstName:'',
                lastName:'',
                email:'',
                phone:'',
                address:'',
            })
            navigate("/");
        }
        addcontact();
        fetchContacts();  
    }
    const singleContact=async ()=>{
    const res = await axios.get(`https://contact-app-cdr6.onrender.com/contacts/${id}`);
    setData(res.data);
  }
  useEffect(()=>{
    if(id) singleContact();
  } ,[id]);
      const updateContactHandeler=async()=>{
        if(!data.firstName || !data.lastName || !data.email || !data.phone || !data.address){
                alert("All field are required");
                return;
        }
        await updateContact(id,data);
        navigate("/");
  }
     

  return (
      <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group row">
                  <label
                    htmlFor="firstName"
                    className="col-md-3 col-form-label"
                  >
                    First Name
                  </label>
                  <div className="col-md-9">
                    <input onChange={formHandeler}
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={data?.firstName}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="lastName"
                    className="col-md-3 col-form-label"
                  >
                    Last Name
                  </label>
                  <div className="col-md-9">
                    <input onChange={formHandeler}
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={data.lastName}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-md-3 col-form-label">
                    Email
                  </label>
                  <div className="col-md-9">

                    <input onChange={formHandeler}
                      type="text"
                      name="email"
                      id="email"
                      value={data.email}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="phone" className="col-md-3 col-form-label">
                    Phone
                  </label>
                  <div className="col-md-9">
                    <input onChange={formHandeler}
                      type="text"
                      name="phone"
                      id="phone"
                      value={data.phone}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="name" className="col-md-3 col-form-label">
                    Address
                  </label>
                  <div className="col-md-9">
                    <textarea
                      onChange={formHandeler}
                      name="address"
                      id="address"
                      rows={3}
                      className="form-control"
                      value={data?.address}
                      
                    />
                  </div>
                </div>
                <hr />
                <div className="form-group row mb-0">
                  <div className="col-md-9 offset-md-3">
                    {id ? <button onClick={()=>updateContactHandeler()} className="btn btn-primary me-2">
                      Update
                    </button> :    
                    <button  onClick={()=>HandelSubmit()} className="btn btn-primary">
                      Save
                    </button>}
                    <Link to="/" className="btn ml-1 btn-outline-secondary">
                      Cancel
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
