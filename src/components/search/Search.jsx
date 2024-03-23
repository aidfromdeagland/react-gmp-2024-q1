import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

const Search = () => {
  const [params, setParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(params.get('query') || '');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearch = () => {
    if (searchValue === params.get('query')) {
      return;
    }
    if (!searchValue) {
      params.delete('query');
    } else {
      params.set('query', searchValue);
    }
    setParams(params);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.repeat && isInputFocused) {
      event.stopPropagation();
      handleSearch();
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={searchValue}
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