import PropTypes from 'prop-types';
import ModalPortal from "../atomics/ModalPortal";

const headerStyle = {
  margin: '1rem auto',
}

function Dialog({ title, onClose, children }) {
  return <ModalPortal onClose={onClose}>
    <h2 style={headerStyle}>
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