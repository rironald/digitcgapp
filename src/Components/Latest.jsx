import React from 'react'
import Releases from '../assets/double_typhoon.jpg'

const Latest = () => {
  return (
    <div className='w-full bg-[#00408b] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Releases} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='uppercase text-white font-bold'>Advanced Deck Set</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl text-white font-bold py-2'>Double Typhoon</h1>
                <p className='text-white'>The 2nd Advanced Deck Set with two popular Digimon!
                Advanced Deck Set – featuring popular Digimon "Terriermon" and "Lopmon"! Just like the previous Beelzemon ST14 set, this set brings incredible power to the deck! All cards are high-quality silver foil cards or better!
                </p>
                <button className='bg-white w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-3 text-black'>Build Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default Latest
