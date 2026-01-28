import React from 'react'

function Marquee({images_url}) {
  return (
    <div className='flex items-center w-full gap-50 overflow-hidden py-8'>
        {images_url.map((url,index) => <img src={url} key={index}/>)}
        {images_url.map((url,index) => <img src={url} key={index}/>)}
    </div>
  )
}

export default Marquee
