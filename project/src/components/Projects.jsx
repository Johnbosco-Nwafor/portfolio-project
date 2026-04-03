import React from 'react'
import Title from './Title'
import { projects } from '..'

const Projects = () => {
  return (
    <div>
        <Title title="Projects"/>

        <div className='mt-20 flex flex-wrap gap-20 justify-center items-center'>
            {
                projects.map((items, index)=>(
                    <div
                     key={index}
                     className='w-[350px] h-[350px] cursor-pointer shadow-xl hover:scale-110 rounded-md ease-in-out duration-300'
                    >
                        <img src={items.img} className='h-[250px] rounded-md object-cover w-full shadow-lg'/>
                        <div className='h-[100px] w-full flex flex-col rounded-md py-6 px-2'>
                            <p className='text-2xl font-semibold text-black dark:text-white'>{items.title}</p>
                            <span className='text-lg text-orange-700'>{items.cat}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects