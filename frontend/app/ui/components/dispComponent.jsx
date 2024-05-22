import Image from 'next/image'
import Photo from '@/public/images/photos.png'
import CommentIcon from '@/public/icons/comment.svg'

const DisplayComponents = ({title}) => {
    return (
        <section className='mt-5 laptop:px-20 tablet:px-16 px-8 pb-5 min-w-screen'>
            
            <div className='w-full border-b border-t border-black'>
                <h2 className='font-semibold text-primary-red mb-5 mt-3 uppercase'>{title}</h2>

                <ul className='w-full flex gap-4 overflow-x-scroll laptop:overflow-x-visible pb-4'>
                    {[1,2,3,4].map(() => (
                        <li className='c-width min-w-[250px] laptop:min-w-[100px]'>
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
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default DisplayComponents
