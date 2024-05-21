import Image from 'next/image'
import Photo from '@/public/images/feature-image.jpg'
import ArrowRed from '@/public/icons/arrow-right-red.svg'
import VideoC from '@/public/icons/video-c.svg'
import VideoIcon from '@/public/icons/video-white.svg'
import Link from 'next/link'
import FeaturedVideos from '../ui/features/featuredVideos'
import Latest from '../ui/components/latest'

const Page = () => {
    return (
        <main>
            <section className='mt-8'>
                <div className='min-h-[600px] grid grid-cols-2 gap-5 mt-6 border-b-2 border-black pb-8'>
                    <div className='h-full border-r border-[#d9d9d9] pr-5'>
                        <div className='w-full relative parent-hover cursor-pointer'>
                            <div>
                                <Image src={Photo} className='w-full h-full object-cover' />
                            </div>
                            <div className='absolute left-6 bottom-6 w-[50px] h-[50px] border-2 border-white grid place-items-center child-hover'>
                                <Image src={VideoIcon} />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center gap-2 mt-7 text-primary-gray font-semibold text-xs'>
                                <Image src={VideoC} className='w-[15px]' />
                                <p>VIDEOS</p>
                            </div>
                            <h1 className='mt-3 text-4xl font-semibold'>Video: Conor Benn Discusses Decision Win Over Peter Dobson</h1>
                            <p className='mt-3'>Video by Ryan Burton - Conor Benn Interview - Las Vegas - In a junior middleweight contest, Conor Benn (23-0, 14 KOs) was tested in winning a tough twelve round unanimous decision over a game Peter Dobson (16-1, 9 KOs).</p>

                            <Link href="feature" className="flex items-center gap-4 mt-10">
                                <h3 className="text-xl font-semibold">READ MORE</h3>
                                <Image src={ArrowRed} width={8} />
                            </Link>
                        </div>
                            
                    </div>


                    <ul className='flex flex-col gap-5'>
                        {[1,2,3].map(() => (
                            <li className='flex items-center justify-between pb-4 fights-border-not-last-child'>
                                <div>
                                    <div className='flex items-center gap-2 text-primary-gray font-semibold text-xs'>
                                        <Image src={VideoC} className='w-[15px]' />
                                        <p>VIDEOS</p>
                                    </div>
                                    <h2 className='text-xl font-semibold'>Video: Eddie Hearn Talks Fury-Usyk, Shakur Stevenson, Benn, Dana White, More</h2>
                                </div>
                                <div className='w-full h-[150px] relative parent-hover cursor-pointer'>
                                    <div className='h-full'>
                                        <Image src={Photo} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='absolute left-3 bottom-3 w-[50px] h-[50px] border-2 border-white grid place-items-center child-hover'>
                                        <Image src={VideoIcon} />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </section>

            <FeaturedVideos />
            <Latest />
        </main>
    )
}

export default Page
