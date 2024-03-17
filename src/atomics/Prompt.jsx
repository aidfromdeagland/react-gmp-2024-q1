import PropTypes from 'prop-types';
import styles from './Prompt.module.css';

function Prompt({ prompt, onConfirm }) {
  return <div className={styles.container}>
    <p>{prompt}</p>
    <button type="button" onClick={onConfirm} className={styles.button}>Confirm</button>
  </div>
}

Prompt.propTypes = {
  prompt: PropTypes.string,
  onConfirm: PropTypes.func,
}

export default Prompt;