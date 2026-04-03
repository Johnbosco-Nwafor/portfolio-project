import React from 'react'
import profile from '../assets/img/profile.png'
import react from '../assets/img/react.svg'
import mongoDb from '../assets/img/mongodb.svg'
import redux from '../assets/img/redux.svg'
import javascript from '../assets/img/nodejs.svg'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-6'>
        <div className='flex flex-col mb-10'>
            <h1 className='text-xl font-bold text-orange-700 uppercase mb-3'>Full-stack developer</h1>
            <div className='flex items-center gap-4 my-2'>
                <p className='text-5xl font-bold text-gray-700 dark:text-white'>I'm a</p>
                <div className='px-6 py-2 rounded-full bg-black dark:bg-[#011e6d] flex items-center justify-center'>
                    <span className='text-3xl font-bold text-white dark:text-blue-700'>Developer</span>
                </div>
            </div>
            <h2 className='text-5xl font-extrabold dark:text-white text-black'>CodeDevs</h2>

            <p className='py-5 text-md dark:text-white text-black font-medium'>Full-Stack Web Developer with ability to learn and collaborate in rapidly changing environments and compositions.</p>

            <div className='flex flex-row items-center gap-6 py-2'>
                <button className='py-3 px-4 flex items-center justify-center bg-orange-700 text-white rounded-lg text-lg font-bold cursor-pointer'>Hire Me</button>

                <button className='py-3 px-4 flex items-center justify-center bg-black dark:bg-[#011e6d] text-white rounded-lg text-lg font-bold cursor-pointer'><a href="#">Projects</a></button>
            </div>
        </div>

        <div className='w-[320px] h-[320px] md:w-[600px] md:h-[500px] 2xl:w-[700px] 2xl:h-[700px] relative rounded-full border border-slate-600 dark:border-slate-300 flex items-center justify-center'>
            <img src={profile} className='w-auto h-full absolute -top-5'/>

            <div className='w-full h-full relative rounded-full'>
                <img src={react} className='absolute h-15 w-15 md:h-20 md:w-20 top-12 left-5'/>
                <img src={mongoDb} className='absolute h-15 w-15 md:h-20 md:w-20 top-12 right-5'/>
                <img src={redux} className='absolute h-15 w-15 md:h-20 md:w-20 bottom-12 left-5'/>
                <img src={javascript} className='absolute h-15 w-15 md:h-20 md:w-20 bottom-12 right-5'/>
            </div>
        </div>
    </div>
  )
}

export default Header