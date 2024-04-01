import React from 'react';
import Container from '../../elements/Container';
import AliceCarousel from 'react-alice-carousel';
//import 'react-alice-carousel/lib/alice-carousel.css';
import  '../../../css/carousel.css';
import SlideImg1 from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg';
import SlideImg2 from '../../../medias/images/products/product-1.jpg';
import SlideImg3 from '../../../medias/images/products/product-2.jpg';

import Heading from '../../elements/Heading';

const Slide = ({children, image, category, title }) => {
 
  return (
    <div className="grid grid-cols-2 p-6">
      <div className="p-10 mb-10"> 
      <Heading variant="h4" alignement="left">
        { category }
      </Heading>
      <Heading theme="secondary" variant="h3" alignement="left" className="mb-5">
      { title }
      </Heading>
      <p className='tracking-wide text-lg leading-relaxed font-light text-gray-800'>{ children } </p>
      </div>
      <div className="relative w-full h-full">
      <img
        className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0 object-bottom"
        src={ image }
        alt="Slide Im 1"
        />
      </div>
    </div>
  );


}



export default function EventCard() {


  const items = [
   <Slide
    image={SlideImg1}
    category="Événement à venir"
    title="Vivez la demie finale"
   > 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac dolor
        sit amet lorem imperdiet lacinia eget a augue. Donec a viverra massa.
        Quisque placerat felis et lobortis sagittis. Praesent venenatis velit
        vel orci vehicula consectetur.
   </Slide>,
   <Slide
   image={SlideImg2}
   category="Nouveau Buger"
   title="Découvrez le Killer Buger"
  > 
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac dolor
       sit amet lorem imperdiet lacinia eget a augue. Donec a viverra massa.
       Quisque placerat felis et lobortis sagittis. Praesent venenatis velit
       vel orci vehicula consectetur.
  </Slide>,
  <Slide
  image={SlideImg3}
  category="Nouvelle Recette"
  title="Le Végébuger arrive"
 > 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac dolor
      sit amet lorem imperdiet lacinia eget a augue. Donec a viverra massa.
      Quisque placerat felis et lobortis sagittis. Praesent venenatis velit
      vel orci vehicula consectetur.
 </Slide>,
  ];

  const number = [1, 2, 3, 4];

  return (
    <Container>
        <div className='shadow-2xl mb-20'>
          <AliceCarousel mouseTracking disableButtonsControls infinite items={items} />
        </div>
     </Container>
  )
}
