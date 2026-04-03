import React from 'react'
import Title from './Title'
import { skills, softskills } from '..'
import { BsCheck2All } from 'react-icons/bs'

const Work = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Title title="Technical Skills"/>

        <div className='w-full flex flex-wrap items-center justify-center gap-10 py-10 mb-10'>
            {
                skills.map((items, index)=>(
                    <div
                     key={index}
                     className='px-6 py-2 flex items-center gap-4 bg-[#05174e] rounded-full'
                    >
                        <img src={items.icon} className='w-10 h-10 rounded-full'/>

                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <p className='text-white text-md font-bold'>{items.name}</p>
                                <span className='text-white text-md font-bold'>{items.value + "%"}</span>
                            </div>

                            <div className='w-[200px] h-[10px] bg-slate-800 rounded-md'>
                                <div className='h-[10px] bg-white rounded-md' style={{width: items.value + "%"}}></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <Title title="Soft Skills"/>

        <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10 mt-10'>
            <div className='flex flex-col bg-[#061130] dark:bg-[#05174e] rounded-md py-6 px-5 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                {
                    softskills.slice(0, 5).map((items, index)=>(
                        <div 
                        key={index}
                        className='flex items-center p-3 gap-3'
                        >
                            <BsCheck2All className='text-slate-300' size={24}/>
                            <p className='text-slate-300 text-md'>{items}</p>
                        </div>
                    ))
                }
            </div>

            <div className='flex flex-col bg-[#061130] dark:bg-[#05174e] rounded-md py-6 px-5 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                {
                    softskills.slice(5, 10).map((items, index)=>(
                        <div 
                        key={index}
                        className='flex items-center p-3 gap-3'
                        >
                            <BsCheck2All className='text-slate-300' size={24}/>
                            <p className='text-slate-300 text-md'>{items}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Work