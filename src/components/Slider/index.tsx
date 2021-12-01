import React, { FC, useEffect, useState, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Box } from '@mui/system';

const useStyles = makeStyles({
  sliderContainer: {
    width: '100%',
    height: 'auto',
    marginTop: '1rem',
  },
  slider: {
    width: '100%',
    height: '23.4rem',
    borderRadius: '0.5rem',
    border: '1px solid #000',
    overflow: 'hidden',
    position: 'relative'
  },
  sliderItem: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    opacity: 0,
    transition: 'opacity ease-in-out 1s',
  },
  active: {
    opacity: 1,
  },
  sliderImg: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain'
  },
  sliderDots: {
    textAlign: 'center',
    width: '100%',
    height: '1rem',
    marginTop: '1rem'
  },
  dot: {
    display: 'inline-block',
    height: '1rem',
    width: '1rem',
    borderRadius: '50%',
    cursor: 'pointer',
    margin: '0px 0.5rem',
    backgroundColor: '#9e9e9e',
  },
  activeDot: {
    backgroundColor: '#3f51b5',
    border: '1px solid #212121'
  }
});

type sliderImgType = {
  image: string;
  title: string;
};
const sliderImg: sliderImgType[] = [
  {
    image: '/assets/img/slider-photo/slider1.png',
    title: 'snowmobile',
  },
  {
    image: '/assets/img/slider-photo/slider2.png',
    title: 'can-am on-road vehicle',
  },
  {
    image: '/assets/img/slider-photo/slider3.png',
    title: 'can-am on-road vehicle',
  },
  {
    image: '/assets/img/slider-photo/slider4.png',
    title: 'can-am off-road vehicle',
  },
];

const InfiniteSlider: FC = () => {
  const [current, setCurrent] = useState<number>(0);
  // console.log('Current slide: ', current)
  const intrvalRef = useRef<null | NodeJS.Timeout>(null);
  
  useEffect(() => {
    if (intrvalRef.current) {
      clearInterval(intrvalRef.current);
    }
    intrvalRef.current = setInterval(
      () => setCurrent((prevState) => (current === sliderImg.length - 1 ? 0 : prevState + 1)),
      5000
    );
  }, [current]);
 
  const classes = useStyles();
  return (
    <Box component="div" className={classes.sliderContainer}>
      <div className={classes.slider}>
      {sliderImg.map((elem, idx) => (
        <div
          key={idx}
          className={clsx(
            classes.sliderItem,
            current === idx && classes.active
          )}
        >
          <img className={classes.sliderImg} src={elem.image} alt={elem.title} />
        </div>
      ))}
      </div>
      <Box component="div" className={classes.sliderDots}>
        {sliderImg.map((_, idx) => (
          <div
            key={idx}
            className={clsx(classes.dot, current === idx && classes.activeDot)}
            onClick={() => setCurrent(idx)}
          ></div>
        ))}
      </Box>
    </Box>
  );
};
export default InfiniteSlider;
