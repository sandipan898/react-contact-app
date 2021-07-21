import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { uuid } from 'uuidv4';

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrievedContacts) setContacts(retrievedContacts)
  }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/add" component={() => <AddContact addContactHandler={addContactHandler}/>} /> */}
          <Route path="/add" render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler}/>
          )} />

          <Route path="/" exact render={(props) => (
              <ContactList {...props} contacts={ contacts } 
                getContactId={removeContactHandler}
              />
            )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
