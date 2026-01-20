import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../context/contexProvier.jsx";
const Homepage = () => {
  const [fromcontacts, setFormcontacts] = useState([]);
  const {loading, contacts, deleteContact } = useContext(ContactContext);
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("oldest_to_first");

  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    let filteredContacts = [...contacts];

    // Only filter by searchText if searchActive is true or searchText is empty (reset)
    if (searchActive && searchText.trim() !== "") {
      filteredContacts = filteredContacts?.filter((contact) => {
        const firstName = contact.firstName || "";
        const lastName = contact.lastName || "";
        const email = contact.email || "";
        const phone = contact.phone || "";
        const fullName = `${firstName} ${lastName}`.toLowerCase();
        const search = searchText.toLowerCase();
        return (
          fullName.includes(search) ||
          email.toLowerCase().includes(search) ||
          phone.toLowerCase().includes(search)
        );
      });
    }

    // Filter by filterText
    if (filterText === "first_name") {
      filteredContacts.sort((a, b) => {
        const aName = a.firstName || "";
        const bName = b.firstName || "";
        return aName.localeCompare(bName);
      });
    } else if (filterText === "last_name") {
      filteredContacts.sort((a, b) => {
        const aName = a.lastName || "";
        const bName = b.lastName || "";
        return aName.localeCompare(bName);
      });
    } else if (filterText === "oldest_to_first") {
      filteredContacts.sort((a, b) => {
        const aId = isNaN(Number(a.id)) ? a.id : Number(a.id);
        const bId = isNaN(Number(b.id)) ? b.id : Number(b.id);
        if (typeof aId === 'number' && typeof bId === 'number') {
          return aId - bId;
        } else {
          return String(aId).localeCompare(String(bId));
        }
      });
    }

    setFormcontacts(filteredContacts);
  }, [contacts, searchText, filterText, searchActive]);

  const SearchHandeler = (e) => {
    e.preventDefault();
    setSearchActive(true);
  };
  useEffect(() => {
    setFormcontacts(contacts);
  }, [contacts]);
  return (
    <main className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header card-title">
              <div className="d-flex align-items-center justify-content-between">
                <h2>All Contacts</h2>
                <div className="input-group w-50">
                  <input
                    type="text"
                    className="form-control"
                    value={searchText}
                    onChange={(e)=>{
                      setSearchText(e.target.value);
                      setSearchActive(false); // Reset searchActive on typing
                    }}
                    placeholder="search contact"
                  />
                  <button
                    onClick={SearchHandeler}
                    className="btn btn-success"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
                <div>
                    <Link to="/add-contact" className="btn btn-success">
                    <i className="fa fa-plus-circle" /> Add New
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between p-3">
              <div className="fs-2">
                <i className="fa fa-filter text-success" /> Filter
              </div>
              <select
                onChange={(e)=> setFilterText(e.target.value)}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">Default</option>
                <option value={'first_name'}>First Name (A → Z)</option>
                <option value={'last_name'}>Last Name (A → Z)</option>
                <option value={'oldest_to_first'}>Oldest To First</option>
              </select>
            </div>
            <div className="card-body">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center">Loading...</td>
                  </tr>
                ) : (
                  fromcontacts.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center text-danger">No Contact Information</td>
                    </tr>
                ) : (
                  fromcontacts.map((contact, index) => (
                    <tr key={contact.id || index}>
                      <td>{index + 1}</td>
                      <td>{contact.firstName}</td>
                      <td>{contact.lastName}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone} </td>
                      <td className="d-flex justify-content-start gap-3" width={150}>
                        <Link to={`/${contact.id}`} className="btn btn-sm btn-circle btn-outline-info" title="Show">
                          <i className="fa fa-eye" />
                        </Link>
                        <Link to={`/edit/${contact.id}`} className="btn mx-1 btn-sm btn-circle btn-outline-secondary" title="Edit">
                          <i className="fa fa-edit" />
                        </Link>
                        <button
                          className="btn btn-sm btn-circle btn-outline-danger"
                          title="Delete"
                          onClick={() => deleteContact(contact.id)}
                        >
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                  ))
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    )};
export default Homepage;