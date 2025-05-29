import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.css';
import { filter } from '../../redux/filtersSlice';
import { useState } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  function handleFilter(name) {
    setQuery(name);
    dispatch(filter(name));
  }

  return (
    <div className={styles.searchBox}>
      <label htmlFor="searchField">Find contacts by name</label>
      <input
        type="text"
        name="searchField"
        value={query}
        onChange={(evt) => handleFilter(evt.target.value.toLowerCase())}
      />
    </div>
  );
}
