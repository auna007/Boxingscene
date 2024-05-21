import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full min-h-60 grid grid-cols-4 mt-10 border-t border-black px-20 pt-8 text-xs'>
            <div className=''>
                <h3 className='font-semibold text-sm'>LEGAL</h3>
                <p className='text-primary-gray'>Privacy Polic</p>
                <p className='text-primary-gray'>Terms of Use</p>
                <p className='text-primary-gray'>Cookie Policy</p>
            </div>
            <div className=''>
                <h3 className='font-semibold text-sm'>GET IN TOUCH</h3>
                <p className='text-primary-gray'>Contact Us</p>
                <p className='text-primary-gray'>Submit News</p>
            </div>
            <div className=''>
                <h3 className='font-semibold text-sm'>WHO WE ARE</h3>
                <p className='text-primary-gray'>Team</p>
                <p className='text-primary-gray'>Follow Us</p>
                
            </div>
            <div className='text-primary-gray text-right text-sm'>
                <p className='mb-4'>This website may contain adult language.</p>
                <p>TM & © 2024 BoxingScene. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
