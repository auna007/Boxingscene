import Image from "next/image"
import ArrowDown from '@/public/icons/arrow-down.svg';

const LoadMoreStories = () => {
    return (
        <h3 className='flex justify-center items-center gap-2 cursor-pointer font-semibold text-sm w-full border-b-2 py-5 border-black'>LOAD MORE STORIES <Image src={ArrowDown} /></h3>
    )
}

export default LoadMoreStories
