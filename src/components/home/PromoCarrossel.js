import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import banner1 from '../../images/cool-banner-1.jpg';
import banner2 from '../../images/cool-banner-2.jpg';
import banner3 from '../../images/cool-banner-3.jpg';

const items = [
    {
      src: banner1,
      altText: 'BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats',
      caption: 'BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats'
    },
    {
      src: banner2,
      altText: 'Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket',
      caption: 'Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket'
    },
    {
      src: banner3,
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
          <img src={item.src} alt={item.altText} className='h-65 w-100 p-3 mx-auto d-block bg-secondary'/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
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