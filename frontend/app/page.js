import Image from "next/image";
import ArrowRed from '@/public/icons/arrow-right-red.svg'
import MustRead from '@/public/icons/must-read.svg'
import HeroImage from '@/public/images/hero-image.png'
import Link from "next/link";
import NewsFeed from "./ui/home/newsfeed";
import Photos from "./ui/home/photos";
import Videos from "./ui/home/videos";

export default function Home() {
  return (
    <main className="">

      <main className="grid grid-cols-1 tablet:grid-cols-2 gap-7 mt-10 laptop:px-20 tablet:px-16 px-8 py-7">
        <div>
          <Image src={HeroImage}/>
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs text-primary-gray">
            <Image src={MustRead} width={15} />
            <p>MUST READ</p>
          </div>
          <h1 className="tablet:text-2xl laptop:text-4xl font-semibold">Chris Algieri's School Of Thought: Fury Has Every Reason To Believe He Can Win The Rematch He's Targeting With Usyk</h1>
          <p className="mt-4 text-xs laptop:text-sm border-t border-[#d9d9d9] pt-5">
          Lorem ipsum dolor sit amet consectetur. Morbi quam adipiscing nulla diam in. Vel erat sit varius arcu potenti elementum a ut sed. Quis tortor condimentum imperdiet vitae orci et. Sed facilisis cursus consequat vehicula lobortis. Dignissim cursus at.
          </p>

          <Link href="/features" className="flex items-center gap-4 mt-6">
            <h3 className="text-2xl font-semibold">READ MORE</h3>
            <Image src={ArrowRed} />
          </Link>
        </div>
      </main>

      <NewsFeed />
      <div className="laptop:px-20 tablet:px-16 px-8 mt-4">
        <div className='w-full border-t-2 border-primary-gray'></div>
      </div>
      <Photos />
      <Videos />

    </main>
  );
}
