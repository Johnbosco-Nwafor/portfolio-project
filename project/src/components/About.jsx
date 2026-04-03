import React from 'react'
import profile from '../assets/img/profile.png'
import { IoPerson } from "react-icons/io5";
import { CiAt } from "react-icons/ci";
import { MdWhatsapp } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const About = () => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-15 justify-between'>
        <div className='w-full md:h-[290px] lg:w-1/3 border border-slate-600 dark:border-slate-400 flex items-center justify-center rounded-lg cursor-pointer'>
         <img src={profile} className='w-auto h-[290px] p-1 ease-in-out hover:scale-110 duration-300'/>
        </div>

        <div className='w-full flex flex-col'>
            <h1 className='text-4xl font-bold text-black dark:text-white'>About Me</h1>

            <p className='leading-10 text-xl font-semibold text-black dark:text-slate-400'>Full-Stack Web Developer with ability to learn and collaborate in rapidly changing environments and compositions. Worked through hours of bootcamp structure, learning Javascript, NodeJs, ReactJs, NextJs and TypeScript. Eager to tackle web development/design challenges to achieve lasting impacts on user experience</p>

            <div className='flex flex-wrap items-center gap-6 py-6'>
                <p className='flex gap-2 items-center px-3 py-2 bg-[#030818cc] text-white rounded-full'>
                    <IoPerson size={26}/>
                    <span className='text-lg font-semibold'>CodeWave Asante</span>
                </p>

                <p className='flex gap-2 items-center px-3 py-2 bg-[#030818cc] text-white rounded-full'>
                    <CiAt size={26}/>
                    <span className='text-lg font-semibold'>myemail@CodeWave.com</span>
                </p>

                <p className='flex gap-2 items-center px-3 py-2 bg-[#030818cc] text-white rounded-full'>
                    <MdWhatsapp size={26}/>
                    <span className='text-lg font-semibold'>+123 7041 858 308</span>
                </p>

                <p className='flex gap-2 items-center px-3 py-2 bg-[#030818cc] text-white rounded-full'>
                    <MdOutlineWifiCalling3 size={26}/>
                    <span className='text-lg font-semibold'>+123 7041 858 308</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About