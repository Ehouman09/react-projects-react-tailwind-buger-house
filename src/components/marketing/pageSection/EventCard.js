import React from 'react';
import Container from '../../elements/Container';
import AliceCarousel from 'react-alice-carousel';
//import 'react-alice-carousel/lib/alice-carousel.css';
import  '../../../css/carousel.css';
import Product1 from '../../../medias/images/products/product-1.jpg';


export default function EventCard() {


  const handleDragStart = (e) => e.preventDefault();


  const items = [
    <img src={ Product1 } onDragStart={handleDragStart} role="presentation" />,
    <img src={ Product1 }  onDragStart={handleDragStart} role="presentation" />,
    <img src={ Product1 }  onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <Container>
        <div className='shadow-2xl mb-20 h-96'>
          <AliceCarousel mouseTracking disableButtonsControls items={items} />
        </div>
     </Container>
  )
}
