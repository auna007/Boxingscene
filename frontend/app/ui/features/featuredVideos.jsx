import React from 'react'
import FeatureVideoCard from '../components/featureVideoCard';
import ThickBorder from '../components/thickBorder';

const FeaturedVideos = () => {
    return (
        <section className='mt-7'>
            <h2 className='text-primary-red font-semibold'>FEATURED VIDEOS</h2>
            <div className='mt-6'>
                <div>
                    <h2 className='font-semibold text-xl'>Saul 'Canelo' Alvarez</h2>
                    <div className='w-full flex gap-4 overflow-x-scroll laptop:overflow-x-visible mt-3 border-b border-black pb-3'>
                        <FeatureVideoCard />
                        <FeatureVideoCard />
                        <FeatureVideoCard />
                        <FeatureVideoCard />
                    </div>
                </div>
                <div className='mt-7'>
                    <h2 className='font-semibold text-xl'>Saul 'Canelo' Alvarez</h2>
                    <div className='w-full flex gap-4 overflow-x-scroll laptop:overflow-x-visible mt-3 pb-3'>
                        <FeatureVideoCard />
                        <FeatureVideoCard />
                        <FeatureVideoCard />
                        <FeatureVideoCard />
                    </div>
                </div>
                <ThickBorder />
            </div>
        </section>
    )
}

export default FeaturedVideos;