import styles from './SearchBox.module.css';

export default function SearchBox({ initValue, onUpdate }) {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="searchField">Find contacts by name</label>
      <input
        type="text"
        name="searchField"
        value={initValue}
        onChange={(evt) => onUpdate(evt.target.value.toLowerCase())}
      />
    </div>
  );
}
