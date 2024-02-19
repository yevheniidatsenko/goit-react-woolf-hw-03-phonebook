import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.contactListUl}>
    {contacts.map(contact => (
      <li className={styles.contactListLi} key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <button
            className={styles.button}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.object.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
