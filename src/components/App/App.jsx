import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Beyoncé', number: '342-12-44' },
      { id: 'id-2', name: 'Drake', number: '440-22-78' },
      { id: 'id-3', name: 'Taylor Swift', number: '897-11-20' },
      { id: 'id-4', name: 'Shawn Mendes', number: '284-91-51' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2 className={styles.title}>Contacts</h2>
        {this.state.contacts.length > 0 ? (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        ) : (
          <p className={styles.noContacts}>
            Your phonebook is empty. Add first contact!
          </p>
        )}
        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}

export default App;
