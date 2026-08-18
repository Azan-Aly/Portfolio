import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Hero = () => {
  return (
    <div>
        <div>
            <Image src={assets.hero_pic} alt='' className='rounded-full w-26'/>
        </div>
         <h2 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Azan Ali 
            <Image src={assets.hand_icon} alt='' className='w-6 ' />
        </h2>

        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            FullStack Developer based in Pakistan.
          </h1>
    </div>
  )
}

export default Hero