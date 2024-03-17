import PropTypes from 'prop-types';
import styles from './SortControl.module.css';

const SortControl = ({ sortBy = '', onSelect }) => {
  const handleSelectionChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Sort by:</label>
      <select value={sortBy} onChange={handleSelectionChange} className={styles.select}>
        <option value="">No sorting</option>
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

SortControl.propTypes = {
  sortBy: PropTypes.oneOf(['', 'title', 'releaseDate']),
  onSelect: PropTypes.func,
}

export default SortControl;