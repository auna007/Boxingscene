"use client"


import { useState } from "react";
import Image from "next/image";
import Logo from '@/public/icons/logo.svg'
import Menu from '@/public/icons/menu.svg'
import MenuClose from '@/public/icons/menu-close.svg'
import ArrowDown from '@/public/icons/arrow-down.svg'
import Search from '@/public/icons/search.svg'
import { navlists } from "../../lib/navbar-lists";
import Link from "next/link";

const Navbar = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [showRankingBox, setShowRankingBox] = useState(false);

    

    return (
        <header className='w-full h-[200px]'>
            <div className="fixed top-0 bg-[#F7F7F7] h-[110px] w-full z-[100000]"></div>
            <div className="fixed left-0 top-[100px] w-full h-[100px] flex gap-x-4 items-center justify-between laptop:px-20 tablet:px-16 px-8 py-7 border-b-2 border-black z-[100] bg-white c-shadow">
                <div className="block laptop:hidden select-none cursor-pointer" onClick={() => setIsNavbarOpen(prev => !prev)}>
                    <Image src={isNavbarOpen ? MenuClose : Menu} />
                </div>
                <Link href='/'>
                    <Image 
                        src={Logo}
                        alt='Boxing Scene Logo'
                        width={150}
                    />
                </Link>
                <ul className="laptop:flex items-center gap-5 hidden">
                    {navlists.map((list) => (
                        <li>
                        <Link href={list.link} className="flex flex-col items-center gap-2">
                            <Image
                                src={list.icon}
                                alt={list.name}
                            />
                            <p className="font-semibold text-[#5e5d5d]">{list.name}</p>
                        </Link>
                        </li>
                    ))}
                </ul>
                <div className="block laptop:hidden">

                </div>
            </div>

            {/* Mobile Screen */}
            <div className={`fixed top-[200px] bg-white ${isNavbarOpen ? 'left-0' : 'left-[-100%]'} w-full c-height transition-[left] ease duration-300 overflow-y-scroll z-[100]`}>
                <div className="flex items-center justify-center gap-5 py-8 border-b border-[#686767]">
                    <Image src={Search} alt="search-icon" />
                    <input type="text" placeholder="Search BoxScene" className="border-0 text-lg" />
                </div>
                <ul className="mt-8 flex flex-col gap-7">
                    {navlists.map((list) => (
                        <li className={`${list.link === 'login' ? 'border-t border-black mt-3 pt-6' : ''} px-8`}>
                            {
                                list.link === 'ranking' || list.link === 'login' ? (
                                    <div className="flex items-center gap-6 relative" onClick={() => setShowRankingBox(prev => !prev)}>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={list.icon}
                                                    alt={list.name}
                                                />
                                                <p className="font-semibold text-xl">{list.name}</p>
                                                <div className={`flex ${list.link === 'ranking' || list.link === 'login' ? 'block' : 'hidden'}`}>
                                                    <Image src={ArrowDown} width={15} alt="arrow-down" />
                                                </div>
                                            </div>
                                            {list.link === 'ranking' && (
                                                <ul className={`${showRankingBox === true ? 'h-[120px] pt-5' : 'h-0'} duration-500 ease transition-all pl-16 overflow-y-hidden flex flex-col gap-3`}>
                                                    <li>OFFICIAL RANKING</li>
                                                    <li>CHAMPIONS</li>
                                                    <li>POUND-FOR-POUND</li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={list.link} className="flex items-center gap-6 relative">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={list.icon}
                                                    alt={list.name}
                                                />
                                                <p className="font-semibold text-xl">{list.name}</p>
                                                <div className={`flex ${list.link === 'ranking' || list.link === 'login' ? 'block' : 'hidden'}`}>
                                                    <Image src={ArrowDown} width={15} alt="arrow-down" />
                                                </div>
                                            </div>
                                            {list.link === 'ranking' && (
                                                <ul className={`${showRankingBox === 'true' ? 'h-[100px] pl-16 pt-5' : 'h-0'} overflow-y-hidden flex flex-col gap-3`}>
                                                    <li>OFFICIAL RANKING</li>
                                                    <li>CHAMPIONS</li>
                                                    <li>POUND-FOR-POUND</li>
                                                </ul>
                                            )}
                                        </div>
                                    </Link>
                                )
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Navbar
