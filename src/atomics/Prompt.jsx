import PropTypes from 'prop-types';

const promptStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

function Prompt({ prompt, onConfirm }) {
  return <div style={promptStyles}>
    <p>{prompt}</p>
    <button type="button" onClick={onConfirm}>Confirm</button>
  </div>
}

Prompt.propTypes = {
  prompt: PropTypes.string,
  onConfirm: PropTypes.func,
}

export default Prompt;