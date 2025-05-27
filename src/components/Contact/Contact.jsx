import { FaPhone, FaUser } from 'react-icons/fa6';
import styles from './Contact.module.css';

export default function Contact({
  contactInfo: { id, name, number },
  onDelete,
}) {
  return (
    <li className={styles.contact}>
      <div>
        <div className={styles.contactInfo}>
          <FaPhone />
          <p>{name}</p>
        </div>
        <div className={styles.contactInfo}>
          <FaUser />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
