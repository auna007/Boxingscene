import ArrowRed from '@/public/icons/arrow-right-red.svg';
import Image from 'next/image';
import LoadMoreStories from '../ui/components/loadMoreStories';

const Page = () => {
  return (
    <main className='mt-10'>
      <h1 className='text-xl tablet:text-4xl font-semibold'>LATEST RESULTS</h1>

      <div className='c-not-last-child-border flex items-center gap-3 mt-5 font-semibold border-b-0 tablet:border-b-2 pb-5 text-sm'>
        <p className={`text-primary-red pr-3 cursor-pointer hover:text-primary-red duration-300 ease`}>FEATURED</p>
        <p className={`text-primary-gray pr-3 cursor-pointer hover:text-primary-red duration-300 ease`}>ALL ARTICLES</p>
        <p className={`text-primary-gray pr-3 cursor-pointer hover:text-primary-red duration-300 ease`}>ALL SCOREBOARDS</p>
      </div>

      <div className='w-full'>
        <ul className='w-full mt-3'>
      
          {[1,2,3,4,5,6].map((_, index) => (
            <li key={index} className='border-t-2 tablet:border-t-0 border-black tablet:border-[#d9d9d9] flex flex-col tablet:flex-row items-center justify-center tablet:justify-between pt-4 border-b pb-4'>
              <div>
                <p className='text-primary-gray text-[9px] font-semibold'>FEATURED</p>
                <p className='font-semibold text-sm'>MAY 18</p>
              </div>
              <div className='block tablet:hidden my-4 border border-[#d9d9d9] w-full '>

              </div>
              <p className='text-primary-gray'>Emanuel Navarrete</p>

              <p className='font-semibold text-primary-gray text-xs py-3 tablet:py-0'>-VS-</p>
              <div className='flex flex-col items-center'>
                <p className='text-primary-red text-[11px] font-semibold'>SPLIT DECISION</p>
                <p className='font-semibold text-sm'>Denys Berinchyk</p>
              </div>

              <div className='hidden tablet:block'>
                <Image
                  src={ArrowRed}
                  width={20}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <LoadMoreStories />

    </main>
  )
}

export default Page
