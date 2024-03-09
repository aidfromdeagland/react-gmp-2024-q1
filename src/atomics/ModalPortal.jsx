import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modalStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'hidden',
  backgroundColor: 'rgba(128, 128, 128, 0.9)',
};

const buttonStyles = {
  backgroundColor: 'rgb(255, 100, 100)',
  alignSelf: 'center',
}

const ModalPortal = ({ onClose, children, ...props }) => {
  const onKeyHandler = (event) => {
    if (event.key === 'Escape' && !event.repeat) {
      event.stopPropagation();
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyHandler);

    return () => {
      document.removeEventListener('keydown', onKeyHandler);
    }
  }, []);

  return (
    <div {...props} style={modalStyles}>
      <button
        type="button"
        style={buttonStyles}
        onClick={onClose}
      >
        Close
      </button>
      {children}
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
