import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact contactInfo={contact} key={contact.id} onDelete={onDelete} />
      ))}
    </ul>
  );
}
