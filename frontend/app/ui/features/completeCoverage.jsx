import Image from 'next/image'
import ArrowRed from '@/public/icons/arrow-right-red.svg'
import Photo from '@/public/images/feature-image.jpg'
import ThickBorder from '../components/thickBorder'

const CompleteCoverage = () => {
    return (
        <section className='mt-7 min-w-full'>
            <h2 className='text-primary-red font-semibold'>COMPLETE COVERAGE</h2>

            <ul className='mt-10 w-full flex gap-4 overflow-x-scroll laptop:overflow-x-visible border-b border-black pb-6'>
                {[1,2,3,4].map((_, index) => (
                    <li key={index} className='coverage-border-not-last-child pr-5 c-width min-w-[250px] laptop:min-w-[200px]'>
                        <div className='flex items-center justify-between gap-1 pb-3'>
                            <p className='font-semibold text-lg'>Tyson Fury</p>
                            <Image
                                src={ArrowRed}
                                width={20}
                            />
                        </div>
                        <div>
                            <Image src={Photo} />
                        </div>

                        <div className='fights-border-not-last-child'>
                            <p className='pt-4 pb-3 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, obcaecati similique. Quibusdam, ipsa!</p>
                            <p className='pt-4 pb-3 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, obcaecati similique. Quibusdam, ipsa!</p>
                            <p className='pt-4 pb-3 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, obcaecati similique. Quibusdam, ipsa!</p>
                        </div>
                    </li>
                ))}
            </ul>

            <ThickBorder />
        </section>
    )
}

export default CompleteCoverage
