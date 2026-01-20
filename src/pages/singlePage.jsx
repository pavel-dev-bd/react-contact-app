
import axios from 'axios';
import React, { useState,useEffect,useContext } from 'react';
import {useParams ,Link,useNavigate} from 'react-router-dom';
import {ContactContext} from '../context/contexProvier.jsx';
const Singlepage = () => {  
  const navigation=useNavigate();
  const { deleteContact } = useContext(ContactContext);
  const {id}=useParams();
  
  const [contact,setContact]=useState({});
  const singleContact=async ()=>{
    const res = await axios.get(`https://contact-app-cdr6.onrender.com/contacts/${id}`);
    setContact(res.data);
  }
  useEffect(()=>{
    singleContact();
  } ,[id]);
  const deleteHandeler = async () => {
    const isDeleted = await deleteContact(id);
    if (isDeleted) {
      navigation('/');
    }
  }

  return (
<main className="py-5">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header card-title">
              <strong>Contact Details</strong>
            </div>
            <div className="card-body">

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group row">
                    <label
                      htmlFor="first_name"
                      className="col-md-3 col-form-label"
                    >
                      Fast Name
                    </label>
                    <div className="col-md-9">
                      <p className="form-control-plaintext text-muted">
                       
                      {contact.firstName ? contact.firstName : ''}
                      </p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="last_name"
                      className="col-md-3 col-form-label"
                    >
                      Last Name
                    </label>
                    <div className="col-md-9">
                      <p className="form-control-plaintext text-muted">
                        {contact?.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="email" className="col-md-3 col-form-label">
                      Email
                    </label>
                    <div className="col-md-9">
                      <p className="form-control-plaintext text-muted">
                       {contact?.email}
                      </p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="phone" className="col-md-3 col-form-label">
                      Phone
                    </label>
                    <div className="col-md-9">
                      <p className="form-control-plaintext text-muted">
                        {contact?.phone}
                      </p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="name" className="col-md-3 col-form-label">
                      Address
                    </label>
                    <div className="col-md-9">
                      <p className="form-control-plaintext text-muted">
                        {contact?.address}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group row mb-0">
                    <div className="col-md-9 offset-md-3 space-x-2">
                      <Link to={`/edit/${id}`} className="btn btn-info">
                        Edit
                      </Link>
                      <button onClick={deleteHandeler} className="btn  mx-1 btn-outline-danger">
                        Delete
                      </button>
                      <Link
                        to="/"
                        className="btn btn-outline-secondary"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )}
export default Singlepage;