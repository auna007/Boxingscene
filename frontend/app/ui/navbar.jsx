import React from 'react'
import Logo from '../../public/icons/logo.svg'
import Image from 'next/image'
// import { navlists } from '../lib/navbar-lists'

const Navbar = () => {
  return (
    <header className='w-full flex items-center justify-between px-20 py-7 border-b border-2 border-black'>
        <Image 
            src={Logo}
            alt='Boxing Scene Logo'
        />
        
    </header>
  )
}

export default Navbar
