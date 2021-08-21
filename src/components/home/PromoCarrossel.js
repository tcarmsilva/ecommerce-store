import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    {
      src: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
      altText: 'BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats',
      caption: 'BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats'
    },
    {
      src: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      altText: 'Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket',
      caption: 'Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket'
    },
    {
      src: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      altText: 'Opna Womens Short Sleeve Moisture',
      caption: 'Opna Womens Short Sleeve Moisture'
    }
  ];

const PromoCarrossel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem 
          className='bg-secondary'
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className='w-25 h-70 p-3 mx-auto d-block bg-secondary'/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }

export default PromoCarrossel;