import Image from "next/image";
import ArrowRed from '@/public/icons/arrow-right-red.svg'
import HeroImage from '@/public/images/hero-image.png'
import Link from "next/link";
import NewsFeed from "./ui/home/newsfeed";
import Photos from "./ui/home/photos";
import Videos from "./ui/home/videos";

export default function Home() {
  return (
    <main className="">

      <main className="grid grid-cols-2 gap-7 mt-10 px-20 py-7">
        <div className="">
          <Image
            src={HeroImage}
          />
        </div>
        <div>
          <h1 className="text-5xl font-semibold">Heading: The rest of the heading goes here</h1>
          <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur. Morbi quam adipiscing nulla diam in. Vel erat sit varius arcu potenti elementum a ut sed. Quis tortor condimentum imperdiet vitae orci et. Sed facilisis cursus consequat vehicula lobortis. Dignissim cursus at.
          </p>

          <Link href="feature" className="flex items-center gap-4 mt-10">
            <h3 className="text-2xl font-semibold">Feature</h3>
            <Image src={ArrowRed} />
          </Link>
        </div>
      </main>

      <NewsFeed />
      <div className="px-20 mt-4">
        <div className='w-full border-t-2 border-primary-gray'></div>
      </div>
      <Photos />
      <Videos />

    </main>
  );
}
