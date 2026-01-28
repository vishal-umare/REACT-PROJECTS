import React from 'react'

const Stripe = ({value}) => {
  return (
    <div className='w-[16.66%] py-5 px-10 border-t-1 border-r-1 border-b-1 border-zinc-600 flex justify-between items-center'>
        <img src={value.url} alt=""/>
        <span className='font-semibold'>{value.number}</span>
    </div>
  )
}

export default Stripe

