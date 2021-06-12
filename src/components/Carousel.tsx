import React, { FC, useState } from 'react';
import DCarousel from 'react-spring-3d-carousel';
import { config, SpringConfig } from 'react-spring';
import { Slide } from '../utils/types';

type CarouselProps = {
  slides: Slide[];
};

export const Carousel: FC<CarouselProps> = ({ slides }) => {
  const [state, setState] = useState<{
    goToSlide: number;
    offsetRadius: number;
    showNavigation: boolean;
    config: SpringConfig;
  }>({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  });

  let slidesForThis = slides?.map((slide, index) => {
    return {
      ...slide,
      onClick: () => setState({ ...state, goToSlide: index }),
    };
  });

  let xDown: number | null = null;
  let yDown: number | null = null;

  const getTouches = (evt: any) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt: any) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt: any) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ ...state, goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ ...state, goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <div
      style={{ width: '80%', height: '500px', margin: '0 auto' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <DCarousel
        slides={slidesForThis}
        goToSlide={state.goToSlide}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </div>
  );
};
