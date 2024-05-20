import React from 'react'

const Navbar = ({Logo, navlists, Link, Image}) => {
    return (
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
    )
}

export default Navbar
