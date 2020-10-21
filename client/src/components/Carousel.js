import React, { useState } from 'react';
import SlideImage from './SlideImage';
import i0 from '../slideImages/0.jpg';
import i1 from '../slideImages/1.jpg';
import i2 from '../slideImages/2.png';
import i3 from '../slideImages/3.jpg';
import i4 from '../slideImages/4.jpg';
import i5 from '../slideImages/5.jpg';
import i6 from '../slideImages/6.jpg';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderArr = [
    <SlideImage src={i0} />,
    <SlideImage src={i1} />,
    <SlideImage src={i2} />,
    <SlideImage src={i3} />,
    <SlideImage src={i4} />,
    <SlideImage src={i5} />,
    <SlideImage src={i6} />,
  ];
  const goLeft = () => {
    currentSlide === 0
      ? setCurrentSlide(-100 * (sliderArr.length - 1))
      : setCurrentSlide(currentSlide + 100);
  };
  const goRight = () => {
    currentSlide === -100 * (sliderArr.length - 1)
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide - 100);
  };
  return (
    <div className='carousel'>
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className='slide'
            style={{ transform: `translateX(${currentSlide}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button className='swipe__slide' id='goLeft' onClick={goLeft}>
        <ChevronLeftIcon
          className='chevron__icon'
          style={{ fontSize: '5rem' }}
        />
      </button>
      <button className='swipe__slide' id='goRight' onClick={goRight}>
        <ChevronRightIcon
          className='chevron__icon'
          style={{ fontSize: '5rem' }}
        />
      </button>
    </div>
  );
};

export default Carousel;
