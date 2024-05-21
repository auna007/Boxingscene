import React from 'react'
import ArrowRed from '@/public/icons/arrow-right-red.svg'
import FeatureImage from '@/public/images/feature-image-2.jpg'
import Image from 'next/image'
import ThickBorder from '../components/thickBorder'

const NewsFeatures = () => {
    return (
        <section className='flex justify-between mt-7'>
            <div className='basis-[65%] border-r border-[#d9d9d9] pr-6'>
                <h2 className='text-primary-red font-semibold'>NEWS FEATURES</h2>
                <ul className='flex flex-col gap-y-4'>
                    {[1,2,3,4,5].map((_, index) => (
                        <li className='fights-border-not-last-child flex items-center gap-8 mt-6 pb-5'>
                            <div>
                                <h2 className='font-semibold text-2xl mb-2'>The Greatest Hits Of Oleksandr Usyk</h2>
                                <p>Matt Christie revisits the undisputed heavyweight champion Oleksandr Usyk's best..</p>
                                <small className='text-primary-gray mt-2'>23h ago</small>
                            </div>
                            <div className='w-[180px]'>
                                <Image src={FeatureImage} className='w-full' />
                            </div>
                        </li>
                    ))}
                    
                    <li><ThickBorder /></li>
                    
                </ul>


                <h2 className='text-primary-red font-semibold mt-4'>WORLD NEWS</h2>
                <ul className='flex flex-col gap-y-4'>
                    {[1,2,3,4,5].map((_, index) => (
                        <li className='fights-border-not-last-child flex items-center gap-8 mt-6 pb-5'>
                            <div>
                                <h2 className='font-semibold text-2xl mb-2'>The Greatest Hits Of Oleksandr Usyk</h2>
                                <p>Matt Christie revisits the undisputed heavyweight champion Oleksandr Usyk's best..</p>
                                <small className='text-primary-gray mt-2'>23h ago</small>
                            </div>
                            <div className='w-[180px]'>
                                <Image src={FeatureImage} className='w-full' />
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
            <div className='basis-[25%]'>
                <div className='w-full flex items-center justify-between'>
                    <h2 className='text-primary-red font-semibold'>DAILY BREAD MAILBAG</h2>
                    <Image src={ArrowRed} />
                </div>

                <div className='mt-4'>
                    <h3 className='font-semibold text-[16px]'>By Tris Dixon</h3>
                    <p className='text-primary-gray text-xs border-b border-[#d9d9d9] pb-4'>MAY 11</p>
                    <div className='mt-4 text-sm font-semibold'>
                        Want Breadman to answer your question? <span className='font-normal'>Shoot an email to</span> <a href="mailto:tristramdixon@hotmail.com" className='underline'>tristramdixon@hotmail.com</a>
                    </div>
                    <ThickBorder />
                </div>
            </div>
        </section>
    )
}

export default NewsFeatures
