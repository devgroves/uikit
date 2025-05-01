// src/components/ImageWithFallback.js
import { useState } from 'react';

export default function ImageWithFallback({ src, fallbackSrc, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [errored, setErrored] = useState(false);

  const onError = () => {
    if (!errored && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setErrored(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={onError}
      {...props}
    />
  );
}