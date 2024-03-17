import PropTypes from 'prop-types';
import ModalPortal from "./ModalPortal";
import styles from './Dialog.module.css';

function Dialog({ title, onClose, children }) {
  return <ModalPortal onClose={onClose}>
    <h2 className={styles.header}>
      {title}
    </h2>
    {children}
  </ModalPortal>
}

Dialog.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Dialog;