import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My Services</h2>

            <p className='text-center max-w-2xl mx-auto my-8  font-Ovo'>
                I am a Full Stack Developer from Pakistan with 2+ years of experience in multiple companies and software house as intern and full time remote & on-site job.
            </p>

<<<<<<< HEAD
            <div className='gridContainer gap-4 my-10'>
                {serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index} className='border border-gray-400 rounded-3xl px-6 pt-4 pb-6 cursor-pointer hover:shadow-xl hover:shadow-fuchsia-200 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                        <Image className='w-16' src={icon} alt={title} ></Image>
=======
            <div className='gridcontainer gap-4 my-10 '>
                {serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index} className='border border-gray-400 rounded-3xl px-6 pt-4 pb-6 cursor-pointer shadow-lg hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                        <Image className='w-16 rounded-xl pl-0' src={icon} alt='{title}' ></Image>
>>>>>>> f55d68a80a1c84120c7554afb2ba9de194f49b30
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <Link href={link} className='flex items-center gap-2 text-sm mt-4'>
                            Read more!
                            <Image src={assets.right_arrow} alt='rightarrow' className='w-4' />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services