import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-20'>
        <div className='flex flex-col md:flex-row justify-between gap-6'>
            <p className='text-lg text-white font-semibold'>Address XYZ ST 128, IN</p>

            <div className='flex flex-col md:flex-row  gap-6 text-white'>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#project">Project</a>
            </div>

            <div className='flex flex-col gap-2 text-white'>
                <p>myemail@cpdewave.com</p>
                <span>+1234 7041 564 895</span>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-10'>
            <h4 className='text-white font-semibold tracking-wider'>Social Media</h4>

            <div className='flex gap-10 text-white text-2xl mb-10'>
                <BsYoutube className='hover:scale-125'/>
                <BsFacebook className='hover:scale-125'/>
                <BsInstagram className='hover:scale-125'/>
                <BsLinkedin className='hover:scale-120'/>
                <AiFillTwitterCircle className='hover:scale-125'/>
            </div>

            <p className='text-gray-400 text-md tracking-wider'>@2026 CodeDevs</p>
        </div>
    </footer>
  )
}

export default Footer