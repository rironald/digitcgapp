import React from 'react'
import Agumon from '../assets/agumon_promo.jpg'
import SpringBreak from '../assets/spring_break.jpg'
import UltimateCup from '../assets/ultimate_cup.jpg'

const Cards = () => {
  return (
    <div className='w-full py-[2rem] px-4 bg-[#00408b] text-black'>
        <h1 className='w-full md:text-5xl sm:text-6xl text-4xl flex flex-col justify-center text-center italic font-bold text-white py-16'>Latest News</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl bg-white mt-6 flex flex-col rounded-md hover:scale-105 duration-300'>
            <img className='w-50 mx-auto mt-[5rem]' src={Agumon} alt="/" />
            <h1 className='md:text-2xl sm:text-4xl text-4xl font-bold mx-6 pt-16'>Championship 2024 Store Regionals</h1>
            <p className='mx-6 pt-2 pb-6 font-medium'>Become the best in your are and win great prizes!</p>
        </div>
        <div className='w-full shadow-xl bg-white mt-6 flex flex-col rounded-md hover:scale-105 duration-300'>
            <img className='w-50 mx-auto mt-[5rem]' src={SpringBreak} alt="/" />
            <h1 className='md:text-2xl sm:text-4xl text-4xl font-bold mx-6 pt-16'>2024 Spring Break Event</h1>
            <p className='mx-6 pt-2 pb-6 font-medium'>A special store tournament with a twist and welcoming to beginner players!</p>
        </div>
        <div className='w-full shadow-xl bg-white mt-6 flex flex-col rounded-md hover:scale-105 duration-300'>
            <img className='w-50 mx-auto mt-[5rem]' src={UltimateCup} alt="/" />
            <h1 className='md:text-2xl sm:text-4xl text-4xl font-bold mx-6 pt-16'>February-August 2024 Ultimate Cup</h1>
            <p className='mx-6 pt-2 pb-6 font-medium'>The Ultimate Cup is back again for the 2024 season!</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
