import Image from "next/image";
import Logo from '@/public/icons/logo.svg'
import HeroImage from '@/public/images/hero-image.png'
import { navlists } from "./lib/navbar-lists";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <header className='w-full flex items-center justify-between px-20 py-7 border-b border-2 border-black'>
        <Image 
          src={Logo}
          alt='Boxing Scene Logo'
        />
        <ul className="flex items-center gap-5">
          {navlists.map((list) => (
            <li>
              <Link href={list.link} className="flex flex-col justify-center items-center gap-1">
                <Image
                  src={list.icon}
                  />
                <p>{list.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </header>

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
        </div>
      </main>
    </main>
  );
}
