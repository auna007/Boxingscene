import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full min-h-60 grid grid-cols-4 mt-10 border-t border-black px-20 pt-8'>
            <div className=''>
                <h3 className='font-semibold'>LEGAL</h3>
                <p className='text-primary-gray'>Link 1</p>
                <p className='text-primary-gray'>Link 1</p>
                <p className='text-primary-gray'>Link 1</p>
                <p className='text-primary-gray'>Link 1</p>
            </div>
            <div className=''>
                <h3 className='font-semibold'>GET IN TOUCH</h3>
                <p className='text-primary-gray'>Link 1</p>
                <p className='text-primary-gray'>Link 1</p>
                <p className='text-primary-gray'>Link 1</p>
                <p className='text-primary-gray'>Link 1</p>
            </div>
            <div className=''>
                <h3 className='font-semibold'>WHO WE ARE</h3>
                <p className='text-primary-gray'>Link 1</p>
                <p className='text-primary-gray'>Link 1</p>
                <p className='text-primary-gray'>Link 1</p>
                <p className='text-primary-gray'>Link 1</p>
            </div>
            <div className='text-primary-gray text-right'>
                <p className='mb-4'>This website may contain adult language.</p>
                <p>TM & © 2024 BoxingScene. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
