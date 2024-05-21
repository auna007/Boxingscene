import Photo from '@/public/images/feature-image.jpg'
import ArrowRed from '@/public/icons/arrow-right-red.svg'
import Image from 'next/image'
import CompleteCoverage from '../ui/features/completeCoverage'
import RecentScoreBoard from '../ui/features/recentScoreBoard'
import NewsFeatures from '../ui/features/newsFeatures'
import FeaturedVideos from '../ui/features/featuredVideos'
import ThickBorder from '../ui/components/thickBorder'

const Page = () => {
  return (
    <main>
      <section className='mt-8'>
        <h2 className='text-primary-red font-semibold'>NEWSROOM</h2>
        <div className='grid grid-cols-2 gap-5 mt-6 border-b-2 border-black pb-2'>
          <div>
            <Image src={Photo} />
          </div>
          <div>
            <div className='flex items-center justify-between gap-1 border-b border-[#d9d9d9] pb-3'>
              <p className='font-semibold uppercase text-3xl'>Fury vs. Usyk</p>
              <Image
                src={ArrowRed}
                width={8}
              />
            </div>
            <ul className='flex flex-col gap-y-4'>
              <li className='border-b border-[#d9d9d9] py-4 leading-6 font-semibold text-xl'>
                Warren Confirms Fury Wants To Go Back In With Usyk And Will Enforce Rematch
              </li>
              <li className='border-b border-[#d9d9d9] py-4 leading-6 font-semibold text-xl'>
                Warren Confirms Fury Wants To Go Back In With Usyk And Will Enforce Rematch
              </li>
              <li className='border-b border-[#d9d9d9] py-4 leading-6 font-semibold text-xl'>
                Warren Confirms Fury Wants To Go Back In With Usyk And Will Enforce Rematch
              </li>
            </ul>
          </div>

        </div>
      </section>

      <CompleteCoverage />
      <RecentScoreBoard />
      <NewsFeatures />
      <ThickBorder />
      <FeaturedVideos />
    </main>
  )
}

export default Page
