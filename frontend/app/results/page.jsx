import ArrowRed from '@/public/icons/arrow-right-red.svg';
import Image from 'next/image';

const Page = () => {
  return (
    <main className='mt-10'>
      <h1 className='text-4xl font-semibold'>LATEST RESULTS</h1>

      <div className='flex items-center gap-8 mt-5 font-semibold border-b-2 pb-5'>
        <p className={`text-primary-red`}>FEATURED</p>
        <p className={`text-primary-gray`}>ALL ARTICLES</p>
        <p className={`text-primary-gray`}>ALL SCOREBOARDS</p>
      </div>

      <div className='w-full'>
        <ul className='w-full'>
          <li className='flex items-center justify-between pt-4'>
            <div>
              <p className='text-primary-gray text-xs'>FEATURED</p>
              <p className='font-semibold'>MAY 18</p>
            </div>
            <p className='text-primary-gray'>Emanuel Navarrete</p>
            <p className='font-semibold'>-VS-</p>
            <div>
              <p className='text-primary-red text-xs'>SPLIT DECISION</p>
              <p className='font-semibold text-sm'>Denys Berinchyk</p>
            </div>
            <Image
              src={ArrowRed}
              width={8}
            />
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Page
