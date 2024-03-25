import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg';
import BugerImgHeroTop from '../../../medias/images/heroTop/burger-hero-top.png';
import Container from '../../elements/Container';
import Header from './Header';


export default function HeroTop() {

  return (
    <div className='bg-primary w-full h-screen'>
        <div className='bg-repeat w-full h-full' style={{backgroundImage:  `url(${Illustration})` }}>
            <Container>
                <Header/>

                <div className="w-full flex items-center">
                  <div className="uppercase text-secondary w-2/3">
                    <h1 className='mb-7'> C'est le moment de gouter au bon goût hambugers </h1>
                    <h2 className='font-secondary '> 
                      <span className='text-8xl block'>Buger</span>
                      <span className='text-6xl'>House</span>
                      <span className='text-4xl ml-3'> Click&Collect </span>
                    </h2>
                  </div>

                  <div className='w-1/3'>
                    <img src={BugerImgHeroTop} alt='Buger Img Hero Top' />
                  </div>
                </div>
            </Container>
        </div>
    </div>
  )
}
