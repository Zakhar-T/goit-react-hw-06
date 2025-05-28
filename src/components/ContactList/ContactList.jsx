import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);

  if (contacts.length > 0)
    return (
      <ul className={styles.contactList}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    );
}
