import React from 'react'
import { IoIosReturnRight } from "react-icons/io";


const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-40 bg-zinc-200 py-2 px-3 rounded-full text-black flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button