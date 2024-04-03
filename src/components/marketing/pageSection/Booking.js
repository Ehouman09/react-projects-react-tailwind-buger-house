import React from 'react'
import Container from '../../elements/Container'
import Assiette from '../../../medias/images/background/Assiette-burger-frites.png';
import Burger from '../../../medias/images/background/Burger.png';
import Sauce from '../../../medias/images/background/Sauce-pimente.png';
import Heading from '../../elements/Heading';


export default function Booking() {


  return (
    <Container>
        <div className='relative mb-20'>
            <img src={Burger} alt='Burger' className='absolute top-20 -left-36 z-10' />
            <img src={Sauce} alt='Sauce' className='absolute bottom-0 left-0' />
            <img src={Assiette} alt='Assiette' className='absolute -bottom-52 -right-96' />
            <div className='max-w-3xl mx-auto px-10 py-20 '>
              <Heading variant="h3" alignement="center">
                Réserveation
              </Heading>
              <Heading alignement="center" theme="secondary" className="mt-5">
                Réservez votre table
              </Heading>

              <form className='grid grid-cols-2 gap-x-7 gap-y-6 mt-20'>

                <div className=''> 
                  <label htmlFor='name'>Nom</label>
                  <input 
                    type='text' 
                    name='name' 
                    id='name'
                    autoComplete='off'
                    className='focus:ring-primary focus:border-primary focus:border bloc w-full  rounded-md p-5'
                    placeholder='Nom'
                  />
                </div>


                <div className=''> 
                  <label htmlFor='email'>Email</label>
                  <input 
                    type='email' 
                    name='email' 
                    id='email'
                    autoComplete='off'
                    className='focus:ring-primary focus:border-primary focus:border bloc w-full rounded-md p-5'
                    placeholder='mail@test.com'
                  />
                </div>


                <div className=''> 
                  <label htmlFor='date'>Date</label>
                  <input 
                    type='date' 
                    name='date' 
                    id='date'
                    autoComplete='off'
                    className='focus:ring-primary focus:border-primary focus:border bloc w-full rounded-md p-5'
                    placeholder='mail@test.com'
                  />
                </div>


                <div className=''> 
                  <label htmlFor='date'>Heure</label>
                  <input 
                    type='time' 
                    name='heure' 
                    id='heure'
                    autoComplete='off'
                    className='focus:ring-primary focus:border-primary focus:border bloc w-full rounded-md p-5'
                    placeholder='mail@test.com'
                  />
                </div>

                <div className=''> 
                  <label htmlFor='customer'>Nombre de personne</label>
                  <input 
                    type='text' 
                    name='customer' 
                    id='customer'
                    autoComplete='off'
                    className='focus:ring-primary focus:border-primary focus:border bloc w-full  rounded-md p-5'
                    placeholder='5'
                  />
                </div>


                <div className=''> 
                  <label htmlFor='sendBooking' className='invisible'>Séserver votre repas</label>
                  <input 
                    type='button' 
                    name='customer' 
                    id='customer'
                    autoComplete='off'
                    className='bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-5 cursor-pointer rounded-md animate'
                    placeholder='5'
                    value="Réservez votre repas"
                  />
                </div>

              </form>

            </div>
        </div>
    </Container>
  )
}
