import React from 'react'
import Logo from "../../../medias/svg/logo-burger-house.svg";
import BagIcon from "../../../medias/svg/ico-bag-clickAndCollect.svg";
import Button from '../../elements/Button';

export default function Header() {
  return (
    <div className='relative z-10 flex items-center justify-between py-10'>
      
        <div className='w-full'>
            <img src={Logo} alt='logo' className='w-64' />
        </div>

        <div className='w-full text-secondary'>

            <div className='flex items-center justify-end'>
              <img src={BagIcon} alt='Bag Icon' className='w-5 h-5 mr-1' />
              <span>Commandez votre repas en ligne</span>
            </div>

            <div>
              <div className='flex items-center justify-end mt-5'>
                <Button className='tracking-widest mr-3'>Inscription </Button>
                <Button className='tracking-widest' color='secondary'> Connexion</Button>
              </div>
            </div>
        </div>
        
        
    </div>
  )
}
