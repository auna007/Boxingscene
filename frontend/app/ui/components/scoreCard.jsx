import FighterPlaceHolder from '@/public/icons/fighter-placeholder.svg';
import Image from 'next/image';
import ArrowRed from '@/public/icons/arrow-right-red.svg'


const ScoreCard = () => {
    return (
        <div className='border border-[#d9d9d9]'>
            <div className='p-5'>
                <div className='uppercase flex items-center justify-between font-semibold'>
                    <h3>MUNGUIA</h3>
                    <h3 className='text-primary-gray'>RYDER</h3>
                </div>
                
                <div className='w-full flex justify-between gap-4 mt-2'>
                    <Image src ={FighterPlaceHolder} className='w-[48%]' />
                    <Image src ={FighterPlaceHolder} className='w-[48%]' />
                </div>

                <div className='winner bg-[#ff0022] px-5 py-1 text-white mt-5 w-[100px] text-center font-bold text-xs tablet:text-sm'>
                    <p class="straight-text">WINNER</p>
                    </div>

                    </div>
                <div>

            </div>

            <div className='w-full border-t border-[#d9d9d9] p-5'>
                <div className='flex items-center gap-3'>
                    <p className='font-semibold uppercase text-sm'>Full Scorecard</p>
                    <Image
                        src={ArrowRed}
                        width={20}
                    />
                </div>
            </div>
        </div>
    )
}

export default ScoreCard
