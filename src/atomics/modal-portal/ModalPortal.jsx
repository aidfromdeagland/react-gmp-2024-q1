import PropTypes from 'prop-types';
import styles from './ModalPortal.module.css'
import { useEffect } from 'react';

const ModalPortal = ({ onClose, children, ...props }) => {
  useEffect(() => {
    const onKeyHandler = (event) => {
      if (event.key === 'Escape' && !event.repeat) {
        event.stopPropagation();
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyHandler);

    return () => {
      document.removeEventListener('keydown', onKeyHandler);
    }
  }, [onClose]);

  return (
    <div {...props} className={styles.container}>
      <div className={styles.content}>
        <button
          type="button"
          className={styles.button}
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

ModalPortal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default ModalPortal;
