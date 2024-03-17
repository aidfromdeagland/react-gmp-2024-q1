import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

const Search = ({ initialQuery, onSearch }) => {
  const [query, setQuery] = useState(initialQuery);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.repeat && isInputFocused) {
      event.stopPropagation();
      onSearch(query);
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <button
        type="button"
        className={styles.button}
        onClick={handleSearch}
      >Search</button>
    </div>
  );
};

Search.propTypes = {
  initialQuery: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Search;