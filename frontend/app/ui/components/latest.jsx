import VideoC from '@/public/icons/video-c.svg'
import Image from 'next/image'
import Photo from '@/public/images/feature-image.jpg'

const Latest = () => {
    return (
        <section className='w-full mt-6'>
            <div className='w-[70%] border-r pr-5 border-[#d9d9d9]'>
            <h2 className='text-primary-red font-semibold'>LATEST</h2>
                <ul className='flex flex-col gap-y-8 mt-5'>
                    {[1,2,3,4,5,6].map((_, index) => (
                        <li key={index} className='flex items-center justify-between gap-x-5 border-b pb-10'>
                            <div>
                                <div className='flex items-center gap-2 text-primary-gray font-semibold text-xs'>
                                    <Image src={VideoC} className='w-[15px]' />
                                    <p>VIDEOS</p>
                                </div>
                                <h2 className='font-semibold text-xl mb-2'>Yordenis Ugas Reflects on Career-Defining Win Over Pacquiao</h2>
                                <p className='text-sm'>Relentless William Zepeda (30-0, 26 KOs) rolled over Maxi Hughes (26-7-2, 5 KOs)...</p>
                                <small className='text-primary-gray mt-4'>2mos ago</small>
                            </div>
                            <div className='w-[35%] h-[150px]'>
                                <Image src={Photo} className='w-full h-full object-cover' />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Latest
