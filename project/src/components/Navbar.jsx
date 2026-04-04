import React, { useState } from 'react'
import { LuSun } from "react-icons/lu";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { FiMenu } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#project" }
]

const Navbar = ({darkMode, isMenu, toggleTheme, toggleMenu}) => {
  const [selected, setSelected] = useState(0)

  return (
    <div className='w-full fixed top-0 left-0 z-50 dark:bg-[#05174e] bg-white px-5 md:px-10 border-b border-slate-200 dark:border-0 shadow-lg'>
      <div className='flex flex-row items-center justify-between py-6'>
        <a href="/" className='text-2xl font-bold text-blue-700'>CodeDevs</a>

        
        <div className='hidden md:flex items-center gap-4'>
          {
            links.map((items, index)=>(
              <div
              key={index}
              className={`${selected === index ? "bg-[#05174e] dark:bg-[#061130] text-white" : "text-slate-700 dark:text-slate-200"} px-5 py-2 rounded-full`}
              onClick={()=> setSelected(index)}
              >
                <a href={items.path}>{items.name}</a>
              </div>
            ))
          }
        </div>

        <button onClick={toggleTheme} className='cursor-pointer'>
          {
            darkMode ? (<LuSun size={24} color='white'/>) : <WiMoonAltFirstQuarter size={24} color='black'/>
          }
        </button>

        <div className='md:hidden'>
          <button
          type='button'
          aria-expanded="false"
          aria-controls='mobile-view'
          className='cursor-pointer'
          onClick={toggleMenu}
          >
            <FiMenu className={`${isMenu ? "block" : "hidden"} text-black dark:text-slate-200`} size={26}
            />
            <RiCloseLargeLine className={`${isMenu ? "hidden" : "block"} text-black dark:text-slate-200`} size={26}/>
          </button>
        </div>
      </div>

      <div className={`${isMenu ? "hidden" : "block"} flex flex-col gap-2 md:hidden`}>
        {
          links.map((items, index)=>(
            <div
             key={index}
             className={`${selected === index ? "bg-[#05174e] dark:bg-[#061130] text-white" : "text-slate-700 dark:text-slate-200"} px-5 py-2 rounded-lg cursor-pointer`}
             onClick={()=> setSelected(index)}
            >
              <a href={items.path} onClick={toggleMenu}>{items.name}</a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar