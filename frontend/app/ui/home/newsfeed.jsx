import React from 'react'
import UserIcon from '@/public/icons/user-red.svg';
import ArrowDown from '@/public/icons/arrow-down.svg';
import Image from 'next/image';

const NewsFeed = () => {
    return (
        <div className='mt-6 flex px-20 pb-10'>
            <div className='basis-[60%]'>
                <h2 className='font-semibold text-primary-red mb-10'>NEWS FEED</h2>

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
                <h3 className='flex justify-center items-center gap-2 cursor-pointer font-semibold text-sm w-full'>LOAD MORE STORIES <Image src={ArrowDown} /></h3>
            </div>
            <div className='basis-[35%]'>

            </div>
        </div>
    )
}

export default NewsFeed
