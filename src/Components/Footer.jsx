import React from 'react'
import {FaFacebookSquare, FaInstagramSquare,
FaTwitterSquare, FaGithubSquare, FaDiscord} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-900'>
            <div>
                <h1 className='w-full text-3xl font-bold'>Digi-TCG</h1>
                <p className='py-4 text-xs'>The literal and graphical information presented on this site about Digimon, including card images and card text, is copyright Bandai Namco Entertainment and Toei Animation. This website is not produced by, endorsed by, supported by, or affiliated with Bandai Namco Entertainment and Toei Animation.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDiscord size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between items-start px-2 mt-6'>
                <div>
                    <ul>
                        <li className='py-2 text-sm font-bold'>About Us</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='py-2 text-sm font-bold'>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='py-2 text-sm font-bold'>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='py-2 text-sm font-bold'>Credits</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;