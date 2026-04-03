import React from 'react'
import { projectStats, tools } from '..'

const Skills = () => {
  return (
    <div className='flex flex-col gap-20 md:gap-15'>
        <div className='flex flex-wrap items-center justify-center gap-8 md:gap-15'>
            {
                projectStats.map((items, index)=>(
                    <div
                    key={index}
                    className='px-3 py-4 rounded-lg flex flex-col items-center justify-center bg-[#011e6d]'
                    >
                        <p className='text-2xl text-white font-bold'>{items.value}</p>
                        <span className='text-sm text-white font-semibold'>{items.name}</span>
                    </div>
                ))
            }
        </div>

        <div className='flex flex-wrap items-center justify-center gap-8 md:gap-15'>
            {
                tools.map((items, index)=>(
                    <div
                     key={index}
                     className='flex gap-4 items-center justify-center px-4 py-2 rounded-lg bg-slate-200'
                    >
                        <img src={items.icon} className='w-10 h-10 md:w-12 md:h-12 rounded-full object-cover'/>
                        <p>{items.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills