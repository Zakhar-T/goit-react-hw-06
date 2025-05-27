import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('savedContacts'));
    if (savedContacts !== null) {
      return savedContacts;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = (name, number, actions) => {
    setContacts(() => {
      return [...contacts, { id: nanoid(), name: name, number: number }];
    });
    actions.resetForm();
  };

  const deleteContact = (id) => {
    setContacts(() => {
      return contacts.filter((contact) => contact.id !== id);
    });
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search),
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={createContact} />
      <SearchBox initValue={search} onUpdate={setSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
