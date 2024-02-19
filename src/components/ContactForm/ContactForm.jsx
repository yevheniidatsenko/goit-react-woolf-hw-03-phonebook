import React from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    this.reset();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={this.nameInputId}>
          Name
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.label} htmlFor={this.numberInputId}>
          Number
          <input
            className={styles.input}
            type="tel"
            placeholder="Number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Add contact{' '}
        </button>
      </form>
    );
  }
}

export default ContactForm;
