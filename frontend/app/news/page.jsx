import NewsIcon from '@/public/icons/news-icon.svg'
import TagIcon from '@/public/icons/tag-icon.svg'
import ArrowRed from '@/public/icons/arrow-right-red.svg'
import NewsImage from '@/public/images/news-image.png'
import Image from 'next/image'
import LoadMoreStories from '../ui/components/loadMoreStories'

const Page = () => {
    return (
        <main className='w-full flex justify-between pt-10'>
            <div className='basis-[55%]'>
                <div className='flex items-center gap-2'>
                    <Image src={NewsIcon} />
                    <h2 className='text-primary-gray'>NEWS</h2>
                </div>
                <h1 className='mt-3 text-4xl font-semibold leading-snug'>Berinchyk Open To Fights With Shakur, Keyshawn And Muratalla</h1>
                <div className='mt-3'>
                    <Image src={NewsImage} />
                </div>
                <p className='mt-2'>By Boxing Staff</p>
                <p className='text-primary-gray text-xs'>Published Sun May 19, 2024, 10:50 PM EDT</p>
                <p className='mt-4 text-sm border-b  border-black pb-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem sunt illo aspernatur harum facere. Consectetur explicabo ex quod incidunt harum voluptates facere, dicta similique quibusdam et voluptatibus suscipit sunt rem eaque eligendi perferendis eius recusandae doloremque magni, repellendus, omnis nesciunt illum. Nulla modi quia ad. Quaerat vel veniam cum nobis temporibus placeat, eius quae, ipsam neque facere doloremque illum laboriosam eaque optio odit. Impedit sequi id laboriosam nisi fugiat maiores itaque inventore eaque fugit, fuga assumenda quo sit ducimus velit suscipit, cum illum. Soluta est reiciendis consectetur, perferendis sed quasi minima illum repellat hic, consequatur eaque officia molestiae accusantium tempore, ad fuga expedita totam omnis iure quibusdam quos! Itaque quisquam, rerum quas nulla perspiciatis enim excepturi numquam dolore. Minima non id in voluptatem molestias perferendis repudiandae explicabo aliquid fugiat. Quidem dolores id ducimus cum necessitatibus dicta harum omnis? Voluptatum nemo, sint obcaecati libero laborum rerum quae perferendis alias culpa ipsum tempore quia. Ab cupiditate ex eligendi temporibus culpa harum sequi. Ipsam incidunt deserunt ad itaque? Fugit perspiciatis vero, totam enim quidem, cupiditate alias recusandae, aut quod ex dolore ut. Esse omnis iste quia. Deserunt molestiae beatae asperiores voluptatum maxime, voluptate fugiat veritatis architecto debitis minus, nulla repellendus saepe eveniet commodi? Distinctio in quis illum cupiditate maxime ipsam officiis quasi fuga, autem fugit. Vero alias rerum beatae placeat porro odit, odio, debitis nulla voluptas magnam deserunt commodi optio id asperiores eaque similique? Ut nam accusantium deserunt culpa laborum alias sint tenetur molestias dolorum magni labore nihil, unde, ipsa ex porro a est! Ad expedita illum veniam totam soluta deserunt nesciunt vero accusamus sunt ea adipisci cupiditate veritatis aliquid obcaecati, provident ut velit, nulla cumque consequuntur ipsam hic perferendis suscipit eveniet dignissimos. Itaque, architecto voluptas illum, adipisci alias quasi cumque repellat recusandae sequi quibusdam neque cum. Et tempora molestiae voluptatibus porro natus ex recusandae ullam quo expedita, consequatur voluptatem ipsam tempore iure id exercitationem nulla, blanditiis eum dolor! Iste sint omnis totam excepturi voluptatem in iusto mollitia ut quidem saepe dolorem neque laboriosam quisquam esse illum qui laudantium quis aliquid vero exercitationem rem quae ullam, ipsa ex! Iste, eveniet odit asperiores, porro sit veniam error deserunt voluptatem vitae neque debitis explicabo laudantium, quis culpa corporis saepe commodi quasi nobis non ducimus provident. Tenetur possimus accusantium modi quo laboriosam autem, laborum explicabo similique molestiae repellat itaque adipisci placeat neque eveniet eaque libero numquam assumenda. Optio totam voluptas, ratione doloremque minima architecto? Numquam.
                </p>

                <div className='flex items-center gap-2 mt-5'>
                    <Image src={TagIcon} />
                    <h2 className='font-semibold'>TAGS</h2>
                </div>

                <ul className='flex items-center gap-3 mt-3 border-b-2 border-[#7e7d7d] pb-8'>
                    <li className='border-2 p-2 text-primary-gray font-semibold cursor-pointer'>TOP RANK</li>
                    <li className='border-2 p-2 text-primary-gray font-semibold cursor-pointer'>TOP RANK</li>
                    <li className='border-2 p-2 text-primary-gray font-semibold cursor-pointer'>TOP RANK</li>
                    <li className='border-2 p-2 text-primary-gray font-semibold cursor-pointer'>TOP RANK</li>
                </ul>

                <div className='mt-4'>
                    <h3 className='font-semibold'>COMMENTS</h3>

                    <ul className='mt-6 flex flex-col gap-y-4'>
                        <li className='border-b-2 pb-3'>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-sm font-semibold'>Rashford</h3>
                                <p className='italic text-primary-gray text-xs'>05-20-2024</p>
                            </div>
                            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis iste autem, distinctio, fugiat alias, dolore minus cum perspiciatis et aliquid vel tempore. Repellendus, vel!</p>
                        </li>
                        <li className='border-b-2 pb-3'>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-sm font-semibold'>Rashford</h3>
                                <p className='italic text-primary-gray text-xs'>05-20-2024</p>
                            </div>
                            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis iste autem, distinctio, fugiat alias, dolore minus cum perspiciatis et aliquid vel tempore. Repellendus, vel!</p>
                        </li>
                        <li className='border-b-2 pb-3'>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-sm font-semibold'>Rashford</h3>
                                <p className='italic text-primary-gray text-xs'>05-20-2024</p>
                            </div>
                            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis iste autem, distinctio, fugiat alias, dolore minus cum perspiciatis et aliquid vel tempore. Repellendus, vel!</p>
                        </li>
                        <li className='border-b-2 pb-3'>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-sm font-semibold'>Rashford</h3>
                                <p className='italic text-primary-gray text-xs'>05-20-2024</p>
                            </div>
                            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis iste autem, distinctio, fugiat alias, dolore minus cum perspiciatis et aliquid vel tempore. Repellendus, vel!</p>
                        </li>
                        <li className='border-b-2 pb-3'>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-sm font-semibold'>Rashford</h3>
                                <p className='italic text-primary-gray text-xs'>05-20-2024</p>
                            </div>
                            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis iste autem, distinctio, fugiat alias, dolore minus cum perspiciatis et aliquid vel tempore. Repellendus, vel!</p>
                        </li>
                    </ul>

                    <div className='mt-7 flex items-center gap-3 border-b pb-7'>
                        <button className='bg-black px-6 py-2 text-white text-sm'>ADD COMMENTS</button>
                        <button className='px-6 py-2 text-black text-sm border-2 border-black'>ADD COMMENTS</button>
                    </div>
                </div>

                <div className='border-t-2 pt-5'>
                    <div className='flex items-center gap-2'>
                        <Image src={ArrowRed} className='rotate-90' width={7} />
                        <h2 className='text-primary-gray'>NEWS FEED</h2>
                    </div>
                </div>

                <ul className='mt-4 flex flex-col gap-y-5'>
                    <li className='border-b-2 pb-4'>
                        <h3 className='font-semibold'>Heading, this is a heading for news feeds and updates</h3>
                        <p className='text-primary-gray text-xs'>1hr ago</p>
                    </li>
                    <li className='border-b-2 pb-4'>
                        <h3 className='font-semibold'>Heading, this is a heading for news feeds and updates</h3>
                        <p className='text-primary-gray text-xs'>1hr ago</p>
                    </li>
                    <li className='border-b-2 pb-4'>
                        <h3 className='font-semibold'>Heading, this is a heading for news feeds and updates</h3>
                        <p className='text-primary-gray text-xs'>1hr ago</p>
                    </li>
                    <li className='border-b-2 pb-4'>
                        <h3 className='font-semibold'>Heading, this is a heading for news feeds and updates</h3>
                        <p className='text-primary-gray text-xs'>1hr ago</p>
                    </li>
                    <li className='border-b-2 pb-4'>
                        <h3 className='font-semibold'>Heading, this is a heading for news feeds and updates</h3>
                        <p className='text-primary-gray text-xs'>1hr ago</p>
                    </li>
                    <li className='border-b-2 pb-4'>
                        <h3 className='font-semibold'>Heading, this is a heading for news feeds and updates</h3>
                        <p className='text-primary-gray text-xs'>1hr ago</p>
                    </li>
                </ul>

                <LoadMoreStories />
            </div>
            <div className='basis-[30%]'>

            </div>
        </main>
    )
}

export default Page
