import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ডেটা লোড করা
  const fetchContacts = async () => {
    const res = await axios.get('https://contact-app-cdr6.onrender.com/contacts');
    setContacts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // detete contact
  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`https://contact-app-cdr6.onrender.com/contacts/${id}`);
        fetchContacts();
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  };
  // upadate contact
  const updateContact = async (id, updatedData) => {
    await axios.put(`https://contact-app-cdr6.onrender.com/contacts/${id}`, updatedData);
    fetchContacts();
  }

  return (
    <ContactContext.Provider value={{ loading,contacts, fetchContacts, deleteContact, updateContact }}>
      {children}
    </ContactContext.Provider>
  );
};