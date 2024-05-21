import React from 'react'
import UserIcon from '@/public/icons/user-red.svg';
import ArrowRed from '@/public/icons/arrow-right-red.svg';
import FeaturedFightOne from '@/public/images/featured-fight-1.png';
import FeaturedFightTwo from '@/public/images/featured-fight-2.png';
import Image from 'next/image';
import LoadMoreStories from '../components/loadMoreStories';
import Link from 'next/link';

const NewsFeed = () => {
    return (
        <div className='mt-6 px-20 pb-10'>
            <div className='border-t-2 border-primary-gray mb-4'></div>
            <div className='flex gap-10 w-full'>
                <div className='basis-[60%]'>
                    <Link href='/news'><h2 className='font-semibold text-primary-red hover:text-primary-gray transition-colors ease duration-500 mb-10'>NEWS FEED</h2></Link>

                    <ul className='flex flex-col gap-y-6'>
                        <li className='c-border'>
                            <h3 className='text-primary-gray text-xs flex items-center gap-2'>
                                <Image src={UserIcon} />
                                <p>INTERVIEW</p>
                            </h3>
                            <p className='text-sm font-semibold mt-2'>Heading, this is a heading for news feeds and updates</p>
                            <p className='text-primary-gray text-xs mt-2'>1 hr ago</p>
                        </li>
                        <li className='c-border'>
                            <h3 className='text-primary-gray text-xs flex items-center gap-2'>
                                <Image src={UserIcon} />
                                <p>INTERVIEW</p>
                            </h3>
                            <p className='text-sm font-semibold mt-2'>Heading, this is a heading for news feeds and updates</p>
                            <p className='text-primary-gray text-xs mt-2'>1 hr ago</p>
                        </li>
                        <li className='c-border'>
                            <h3 className='text-primary-gray text-xs flex items-center gap-2'>
                                <Image src={UserIcon} />
                                <p>INTERVIEW</p>
                            </h3>
                            <p className='text-sm font-semibold mt-2'>Heading, this is a heading for news feeds and updates</p>
                            <p className='text-primary-gray text-xs mt-2'>1 hr ago</p>
                        </li>
                        <li className='c-border'>
                            <h3 className='text-primary-gray text-xs flex items-center gap-2'>
                                <Image src={UserIcon} />
                                <p>INTERVIEW</p>
                            </h3>
                            <p className='text-sm font-semibold mt-2'>Heading, this is a heading for news feeds and updates</p>
                            <p className='text-primary-gray text-xs mt-2'>1 hr ago</p>
                        </li>
                        <li className='c-border'>
                            <h3 className='text-primary-gray text-xs flex items-center gap-2'>
                                <Image src={UserIcon} />
                                <p>INTERVIEW</p>
                            </h3>
                            <p className='text-sm font-semibold mt-2'>Heading, this is a heading for news feeds and updates</p>
                            <p className='text-primary-gray text-xs mt-2'>1 hr ago</p>
                        </li>
                    </ul>
                    
                    <LoadMoreStories />

                </div>
                <div className='basis-[35%] border-l-2 pl-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-primary-red font-semibold'>FEATURED FIGHT</h3>
                        <div className='flex items-center justify-between gap-1'>
                            <p className='font-semibold text-sm'>Features</p>
                            <Image
                                src={ArrowRed}
                                width={5}
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 mt-5'>
                        <Image src={FeaturedFightOne} />
                        <Image src={FeaturedFightTwo} />
                    </div>

                    <div>
                        
                        <div className='flex items-center gap-2 mt-16 border-b-2 border-black pb-3'>
                            <p className='font-semibold text-sm'>FULL SCHEDULE</p>
                            <Image
                                src={ArrowRed}
                                width={5}
                            />
                        </div>
                        
                        <h3 className='text-primary-red font-semibold mt-6'>TRENDING TOPIC</h3>

                        <ul className='flex flex-col gap-3 mt-8'>
                            <li className='border-b-2 pb-3'>
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='font-semibold text-sm'>Tyson Fury</p>
                                    <Image
                                        src={ArrowRed}
                                        width={5}
                                    />
                                </div>
                                <p className='text-primary-gray text-sm mt-3'>Lorem ipsum dolor sit amet consectetur. Tortor morbi fermentum orci bibendum. Vestibulum.</p>
                            </li>
                            <li className='border-b-2 pb-3'>
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='font-semibold text-sm'>Tyson Fury</p>
                                    <Image
                                        src={ArrowRed}
                                        width={5}
                                    />
                                </div>
                                <p className='text-primary-gray text-sm mt-3'>Lorem ipsum dolor sit amet consectetur. Tortor morbi fermentum orci bibendum. Vestibulum.</p>
                            </li>
                            <li className='border-b-2 pb-3'>
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='font-semibold text-sm'>Tyson Fury</p>
                                    <Image
                                        src={ArrowRed}
                                        width={5}
                                    />
                                </div>
                                <p className='text-primary-gray text-sm mt-3'>Lorem ipsum dolor sit amet consectetur. Tortor morbi fermentum orci bibendum. Vestibulum.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewsFeed
