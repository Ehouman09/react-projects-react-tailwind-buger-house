import React from 'react'
import Container from '../../elements/Container'
import Assiette from '../../../medias/images/background/Assiette-burger-frites.png';
import Burger from '../../../medias/images/background/Burger.png';
import Sauce from '../../../medias/images/background/Sauce-pimente.png';


export default function Booking() {


  return (
    <Container>
        <div className='relative mb-0'>
            <img src={Burger} alt='Burger' className='absolute top-20 -left-36 z-10' />
            <img src={Sauce} alt='Sauce' className='absolute top-0 left-0' />
            <img src={Assiette} alt='Assiette' className='absolute -bottom-52 -right-20' />
        </div>
    </Container>
  )
}
