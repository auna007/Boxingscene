"use client"

import ArrowDown from '@/public/icons/arrow-down.svg';
import FaceBookIcon from '@/public/icons/facebook-icon.svg';
import TwitterIcon from '@/public/icons/twitter-icon.svg';
import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {

    const [legal, setLegal] = useState(false)
    const [getInTouch, setGetInTouch] = useState(false)
    const [whoWeAre, setWhoWeAre] = useState(false)


    return (
        <footer className='w-full min-h-60 grid grid-cols-1 laptop:grid-cols-4 gap-y-5 laptop:gap-y-1 mt-10 border-t border-black laptop:px-20 tablet:px-16 px-8 pt-8 text-sm pb-5'>
            <div className={`border-b laptop:border-0 border-[#d9d9d9] pb-4 transitio-[height] ease duration-500 ${legal ? 'h-[100px]' : 'h-[40px]'} laptop:h-[100px] overflow-y-hidden`}>
                <div className='flex items-center justify-between h-[40px]' onClick={() => setLegal(prev => !prev)}>
                    <h3 className='font-semibold text-lg text underline cursor-pointer'>LEGAL</h3>
                    <div className='block laptop:hidden'>
                        <Image src={ArrowDown} alt='arrow-down' />
                    </div>
                </div>
                <p className='text-primary-gray'>Privacy Policy</p>
                <p className='text-primary-gray'>Terms of Use</p>
                <p className='text-primary-gray'>Cookie Policy</p>
            </div>
            <div className={`border-b laptop:border-0 border-[#d9d9d9] pb-4 transitio-[height] ease duration-500 ${getInTouch ? 'h-[100px]' : 'h-[40px]'} laptop:h-[100px] overflow-y-hidden`}>
            <   div className='flex items-center justify-between h-[40px] cursor-pointer' onClick={() => setGetInTouch(prev => !prev)}>
                    <h3 className='font-semibold text-lg text underline'>GET IN TOUCH</h3>
                    <div className='block laptop:hidden'>
                        <Image src={ArrowDown} alt='arrow-down' />
                    </div>
                </div>
                <p className='text-primary-gray'>Contact Us</p>
                <p className='text-primary-gray'>Submit News</p>
            </div>
            <div className={`border-b laptop:border-0 border-[#d9d9d9] pb-4 transitio-[height] ease duration-500 ${whoWeAre ? 'h-[100px]' : 'h-[40px]'} laptop:h-[100px] overflow-y-hidden`}>
                <div className='flex items-center justify-between h-[40px]' onClick={() => setWhoWeAre(prev => !prev)}>
                    <h3 className='font-semibold text-lg text underline cursor-pointer'>WHO WE ARE</h3>
                    <div className='block laptop:hidden'>
                        <Image src={ArrowDown} alt='arrow-down' />
                    </div>
                </div>
                <p className='text-primary-gray'>Team</p>
                <p className='text-primary-gray'>Follow Us</p>
            </div>
            <div className='text-primary-gray laptop:text-right text-lg order-5 laptop:order-4'>
                <p className='mb-4'>This website may contain adult language.</p>
                <p>TM & © 2024 BoxingScene. All Rights Reserved.</p>
            </div>
            <div className={`laptop:col-start-3 laptop:col-end-4 laptop:border-0 border-[#d9d9d9] pb-4 h-[40px] laptop:min-h-[150px] overflow-y-hidden order-4`}>
                <div className='flex laptop:block items-center justify-between'>
                    <h3 className='font-semibold text-lg text underline cursor-pointer'>FOLLOW US</h3>
                    <div className='flex gap-2'>
                        <Image src={FaceBookIcon} alt='facebook-icon' />
                        <Image src={TwitterIcon} alt='twitter-icon' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
