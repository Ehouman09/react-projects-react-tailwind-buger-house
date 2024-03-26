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
                
                <div className="w-full relative">

                <img className='absolute top-0 right-0 w-10/12' src={BugerImgHeroTop} alt='Buger Img Hero Top' />

                  <div className="uppercase text-secondary bg-yellow-400">
                    <h1 className='mb-4 font-semibold'> C'est le moment de gouter au bon goût hambugers </h1>
                    <h2 className='font-secondary '> 
                      <span className='text-8xl block'>Buger</span>
                      <span className='text-6xl'>House</span>
                      <span className='text-4xl ml-3'> Click <span className='text-red-primary'>&</span> Collect </span>
                    </h2>
                  </div>
 
                   
        
                </div>
            </Container>
        </div>
    </div>
  )
}
