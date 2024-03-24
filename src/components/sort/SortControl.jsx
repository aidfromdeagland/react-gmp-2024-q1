import PropTypes from 'prop-types';
import styles from './SortControl.module.css';

const SortControl = ({ sortBy = '', onSelect }) => {
  const handleSelectionChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Sort by:</label>
      <select value={sortBy} onChange={handleSelectionChange} className={styles.select} data-testid="sort-control">
        <option value="">No sorting</option>
        <option value="release_date asc">Release Date (asc)</option>
        <option value="release_date desc">Release Date (desc)</option>
        <option value="title asc">Title (asc)</option>
        <option value="title desc">Title (desc)</option>
      </select>
    </div>
  );
};

SortControl.propTypes = {
  sortBy: PropTypes.oneOf(['', 'title asc', 'title desc', 'release_date asc', 'release_date desc']),
  onSelect: PropTypes.func,
}

export default SortControl;