import React from 'react';

const SlideImage = ({ src }) => {
  let imgStyles = {
    width: 100 + '%',
    height: 'auto',
  };
  return (
    <img
      className='slide__image'
      src={src}
      alt='slide-img'
      style={imgStyles}
    ></img>
  );
};

export default SlideImage;
