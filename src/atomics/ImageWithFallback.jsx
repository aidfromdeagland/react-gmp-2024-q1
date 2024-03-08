import { useState } from "react";
import PropTypes from 'prop-types';


const ImageWithFallback = ({ src = '', fallback = '', ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const onError = () => setImgSrc(fallback);

  return <img src={imgSrc || fallback} onError={onError} {...props} />
}

ImageWithFallback.propTypes = {
  src: PropTypes.string,
  fallback: PropTypes.string,
  onError: PropTypes.func,
};

export default ImageWithFallback;
