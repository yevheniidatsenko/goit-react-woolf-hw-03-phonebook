# Phonebook Application

This is a simple React application for managing contacts in a phonebook.

## Features

- Add new contacts with a name and phone number.
- Display a list of contacts.
- Filter contacts by name.
- Responsive design for various screen sizes.

## Components

- **App**: The root component managing the state of contacts and filter.
- **ContactForm**: Component for adding new contacts.
- **ContactList**: Component for displaying the list of contacts.
- **Filter**: Component for filtering contacts by name.

## Installation

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Technologies Used

- React
- CSS Modules

### Phonebook Contact Storage

In this updated version, the phonebook application now utilizes localStorage for
storing contacts. Lifecycle methods in React are used for managing this feature.

- When a contact is added or deleted, the contacts are automatically saved to
  localStorage.
- Upon loading the app, contacts, if any, are retrieved from localStorage and
  stored in the application state.

Feel free to explore the code and use it as a reference for your own projects!
