import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

// Send each contact to the ContacCard as props, use destructuring to obtain the values. 

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
      props.getContactId(id);
  };
  const renderList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} remove={props.removeContactHandler} key={contact.id} clickHandler={deleteContactHandler}/>
    );
  });
  return (
    <div className="ui celled list" style={{ width: "500px", padding: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>Contact List</div>
        <Link to="/add">
          <button className="ui button blue">Go to Add Contact</button>
        </Link>
      </div>
      {renderList}
    </div>
  );
};

export default ContactList;
