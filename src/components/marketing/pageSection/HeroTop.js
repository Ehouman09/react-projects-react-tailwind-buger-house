import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg';
import BugerImgHeroTop from '../../../medias/images/heroTop/burger-hero-top.png';
import Container from '../../elements/Container';
import Header from './Header';
import Button from '../../elements/Button';


export default function HeroTop() {

  return (
    <div className='bg-primary w-full'>
        <div className='bg-repeat w-full h-full pb-40' style={{backgroundImage:  `url(${Illustration})` }}>
            <Container>
                <Header/>
                
                <div className="w-full mt-28 relative">

                <img className='absolute z-o -top-64 right-0 w-6/12' src={BugerImgHeroTop} alt='Buger Img Hero Top' />
                
                <div className='absolute right-80 top-40 bg-red-primary w-40 h-40 rounded-full p-3'>
                  <div className='w-full h-full rounded-full text-white border-dashed border-2 border-white flex items-center justify-center'>
                    <div className='text-center'>
                      <span className='block font-extrabold'>
                        <span className='text-5xl'>5</span>.49€ 
                        </span>
                      <span className='uppercase tracking-widest text-sm'>seulement</span>
                    </div>
                  </div>
                </div>

                  <div className="relative z-10 uppercase text-secondary">
                    <h1 className='mb-4 font-semibold'> C'est le moment de gouter au bon goût hambugers </h1>
                    <h2 className='font-secondary shadowTitleSecondary'> 
                      <span className='text-8xl block'>Buger</span>
                      <span className='text-6xl'>House</span>
                      <span className='text-4xl ml-3'> Click <span className='text-red-primary'>&</span> Collect </span>
                    </h2>
                  </div>

                </div>
                

              <Button className="mt-5" color="secondary" theme="big">
                Creer mon compte
              </Button> 

            </Container>
        </div>
    </div>
  )
}
