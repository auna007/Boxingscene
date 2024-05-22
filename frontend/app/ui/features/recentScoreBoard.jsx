import React from 'react'
import ScoreCard from '../components/scoreCard'
import ThickBorder from '../components/thickBorder'

const RecentScoreBoard = () => {
    return (
        <section className='mt-7 w-full'>
            <h2 className='text-primary-red font-semibold'>RECENT SCORECARDS</h2>

            <ul className='w-full grid grid-cols-1 tablet:grid-cols-3 gap-4 mt-5 tablet-small:overflow-x-scroll'>
                <ScoreCard />
                <ScoreCard />
                <ScoreCard />
            </ul>
            <ThickBorder />
        </section>
    )
}

export default RecentScoreBoard
