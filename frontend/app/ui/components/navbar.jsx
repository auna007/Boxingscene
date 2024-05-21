import Image from "next/image";
import Logo from '@/public/icons/logo.svg'
import { navlists } from "../../lib/navbar-lists";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className='w-full flex items-center justify-between px-20 py-7 border-b-2 border-black'>
            <Link href='/'>
                <Image 
                    src={Logo}
                    alt='Boxing Scene Logo'
                />
            </Link>
            <ul className="flex items-center gap-5">
                {navlists.map((list) => (
                    <li>
                    <Link href={list.link} className="flex flex-col items-center gap-2">
                        <Image
                        src={list.icon}
                        />
                        <p className="font-semibold text-[#5e5d5d]">{list.name}</p>
                    </Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Navbar
