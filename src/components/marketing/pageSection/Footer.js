import React from 'react'
import Container from '../../elements/Container'
import bgFooter from '../../../medias/images/background/bg-footer.jpg';
import Logo from '../../../medias/svg/logo-burger-house-white.svg';
import Facebook from '../../../medias/icones/facebook-f-brands.svg'
import Instagram from '../../../medias/icones/instagram-brands.svg'
import Twitter from '../../../medias/icones/twitter-brands.svg'
import Whatsapp from '../../../medias/icones/whatsapp-brands.svg'


import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'



export default function Footer() {


  return (
    <Container>
        <div className='relative mb-20 p-5 text-white'>
            <img src={ bgFooter } alt='Plan de travail cuisine' className='bg-black absolute top-0 left-0 w-full h-full object-cover z-0' />
            
            <div className='relative grid grid-cols-2  h-96 z-10'>
                <div className='w-full p-5 mt-20 mb-28'>
                    <img src={Logo} alt='logo' className='w-2/3' />
                    <p className="mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac dolor
                        sit amet lorem imperdiet lacinia eget a augue. Donec a viverra massa.
                        Quisque placerat felis et lobortis sagittis. Praesent venenatis velit
                        vel orci vehicula consectetur.
                    </p>
                </div>
                <div className=' h-full w-full flex flex-col items-center justify-center'>

                    <div className='flex items-center'>
                        <MapPinIcon className="h-10 w-10 mr-5" />
                        <span className='uppercase font-extrabold text-lg tracking-tighter'>15 places Disposable, 6900 lyon</span>
                    </div>

                    <div className='flex items-center mt-5'>
                        <EnvelopeIcon className="h-10 w-10 mr-5" />
                        <span className='uppercase font-extrabold text-lg tracking-tighter'>info@bugerhouse.com</span>
                    </div>
                    
                </div>
            </div>
            <div className='relative z-10 flex items-center justify-between'>
                <div className='uppercase font-extrabold tracking-tighter text-sm'>
                 © Buger house 2024. All right reserved
                </div>
                <div className='flex'>
                <div>
                    <a href='/#' target="_blank" rel='noreferrer'> 
                    <img src={ Facebook } alt='Facebook' className='w-7 h-7 mr-2 bg-white rounded-full p-1' />
                    </a>
                </div>
                <div>
                    <a href='/#' target="_blank" rel='noreferrer'> 
                    <img src={ Instagram } alt='Instagram' className='w-7 h-7 mr-2 bg-white rounded-full p-1' />
                    </a>
                </div>
                <div>
                    <a href='/#' target="_blank" rel='noreferrer'> 
                    <img src={ Twitter } alt='Twitter' className='w-7 h-7 mr-2 bg-white rounded-full p-1' />
                    </a>
                </div>
                <div>
                    <a href='/#' target="_blank" rel='noreferrer'>
                    <img src={ Whatsapp } alt='Whatsapp' className='w-7 h-7 mr-7 bg-white rounded-full p-1' />
                    </a>
                </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
