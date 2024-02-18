import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from './AddContact';
import { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  
  // This is callback function which is used to handle data sent from the chil components. 
  const appendContactHandler = (contact) => {
    console.log("newly added: ", contact)
    console.log(contacts)
    setContact([...contacts, {id:uuid(), name: contact.name, email:contact.email}]);
  }

  // callback fn to handle deletion 
  const removeContactHandler = (id) =>{
    const newList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContact(newList);
  }

  // Store all the values here 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

 return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact appendContactHandler={appendContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
        </Routes>
      </Router>
    </div>
  );
}

// set the Router

export default App;
