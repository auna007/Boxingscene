import Featureimage from '@/public/images/feature-image-3.jpg'
import VideoIcon from '@/public/icons/video-white.svg'
import Comment from '@/public/icons/comment.svg'
import Image from 'next/image'

const FeatureVideoCard = () => {
    return (
        <div>
            <div className='w-full h-[200px] relative parent-hover cursor-pointer'>
                <div>
                    <Image src={Featureimage} className='w-full object-cover' />
                </div>
                <div className='absolute left-6 bottom-6 w-[50px] h-[50px] border-2 border-white grid place-items-center child-hover'>
                    <Image src={VideoIcon} />
                </div>
            </div>
            <h3 className='font-semibold mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, libero?</h3>
            <div className='flex items-center gap-1 mt-3'>
                <Image src={Comment} />
                <span>0</span>
                <span>comments</span>
            </div>
        </div>
    )
}

export default FeatureVideoCard
