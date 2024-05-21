import Image from 'next/image'
import Photo from '@/public/images/photos.png'
import CommentIcon from '@/public/icons/comment.svg'

const DisplayComponents = ({title}) => {
    return (
        <section className='mt-5 px-20 mb-10 pb-5'>
            
            <h2 className='font-semibold text-primary-red mb-5 mt-3 uppercase'>{title}</h2>

            <ul className='grid gap-7 grid-cols-4'>
                <li>
                    <Image
                        src={Photo}
                    />
                    <h3 className='text-sm mt-2 font-semibold'>Heading. Heading goes  here</h3>
                    <div className='mt-3 flex items-center gap-2 text-xs text-[#181817]'>
                        <Image
                            src={CommentIcon}
                        />
                        <p>0</p>
                        <p>comments</p>
                    </div>
                </li>
                <li>
                    <Image
                        src={Photo}
                    />
                    <h3 className='text-sm mt-2 font-semibold'>Heading. Heading goes  here</h3>
                    <div className='mt-3 flex items-center gap-2 text-xs text-[#181817]'>
                        <Image
                            src={CommentIcon}
                        />
                        <p>0</p>
                        <p>comments</p>
                    </div>
                </li>
                <li>
                    <Image
                        src={Photo}
                    />
                    <h3 className='text-sm mt-2 font-semibold'>Heading. Heading goes  here</h3>
                    <div className='mt-3 flex items-center gap-2 text-xs text-[#181817]'>
                        <Image
                            src={CommentIcon}
                        />
                        <p>0</p>
                        <p>comments</p>
                    </div>
                </li>
                <li>
                    <Image
                        src={Photo}
                    />
                    <h3 className='text-sm mt-2 font-semibold'>Heading. Heading goes  here</h3>
                    <div className='mt-3 flex items-center gap-2 text-xs text-[#181817]'>
                        <Image
                            src={CommentIcon}
                        />
                        <p>0</p>
                        <p>comments</p>
                    </div>
                </li>
            </ul>

            <div className='border-b border-black pb-4 mt-5'>

            </div>
        </section>
    )
}

export default DisplayComponents
