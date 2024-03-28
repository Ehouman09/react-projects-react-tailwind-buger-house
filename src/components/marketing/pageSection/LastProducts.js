import React from 'react'
import Container from '../../elements/Container'
import Image1 from '../../../medias/images/products/lastProducts-1.jpg';
import Image2 from '../../../medias/images/products/lastProducts-2.jpg';
import Image3 from '../../../medias/images/products/lastProducts-3.jpg';

export default function LastProducts() {
  return (
    <Container>
        <div className='grid grid-row-2 grid-cols-2 gap-x-9 gap-y-9  w-full px-11 h-96 my-20 text-white uppercase'>

            <div className='relative row-span-2 bg-primary h-full rounded-md p-7'>

                {/* <div className='absolute z-10 top-0 left-0 rounded-md w-full h-full bg-black opacity-40'></div> */}

                <img src={ Image1 } className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt='Un delicieux Hamburger exposé sur une pièce de bois'/>

               <div className='z-10 relative'>
                    <span className='block font-bold text-lg'>Killer Burger</span>
                    <span className='font-black text-2xl'>Plus de goût</span>
               </div>
            </div>

            <div className='relative bg-primary h-full rounded-md p-7'>

                <img src={ Image2 } className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt='Deux delicieux Hamburger exposé sur une pièce de bois'/>

                <div className='z-10 relative'>
                    <span className='block font-bold text-lg'>Island Buger</span>
                    <span className='block text-2xl'>Plus de Plaisir</span>
                    <span className='font-black text-2xl'>Plus de goût</span>
                </div>
            </div>

            <div className='relative bg-primary h-full rounded-md p-7'>

                <img src={ Image3 } className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt='Un delicieux Hamburger exposé sur une pièce de bois'/>

                 <div className='z-10 relative'>
                    <span className='block font-bold text-lg'>Orlando Burger</span>
                    <span className='font-black text-2xl'>Frais &  pimenté</span>
                 </div>
            </div>

        </div>
    </Container>
  )
}
