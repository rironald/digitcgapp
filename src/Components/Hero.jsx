import React from 'react'

const Body = () => {
  return (
    <div className='text-black'>
      <div className='w-full h-screen mx-auto text-center flex flex-col justify-center bg-white'>
        <p className='text-[#00408b] font-bold p-2'>DIGIMON CARD GAME</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Welcome Tamers!</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>Build and share your decks</p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Browse through all the latest sets released</p>
        <button className='bg-[#00408b] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-white'>Get Started</button>
      </div>
    </div>
  )
}

export default Body
