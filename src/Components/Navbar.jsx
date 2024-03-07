import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { VscAccount } from "react-icons/vsc"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div id='navbar'>
      <div className='flex items-center max-w-[1280px] h-20 mx-auto px-6'>
        <h1 className='w-full text-white text-3xl font-bold'><NavLink to="/">Digi-TCG</NavLink></h1>
        <ul className='hidden md:flex text-white'>
            <li className='p-4'><NavLink to="/">Home</NavLink></li>
            <li className='p-4'><NavLink to="/cards">Cards</NavLink></li>
            <li className='p-4'>Decks</li>
            <li className='p-4'>News</li>
            <li className='px-2 py-3'><NavLink to="/login"><VscAccount className='inline' size={30}/></NavLink></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden text-white'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-600 bg-[#ffffff] text-black ease-in-out duration-500': 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold m-4'>Digi-TCG</h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-b-gray-600'>Home</li>
            <li className='p-4 border-b border-b-gray-600'>Cards</li>
            <li className='p-4 border-b border-b-gray-600'>Decks</li>
            <li className='p-4 border-b border-b-gray-600'>News</li>
            <li className='p-4'>Sign-In</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
