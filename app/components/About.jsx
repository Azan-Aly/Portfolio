"use client";

import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'

const About = () => {
    return (
        <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.newpic} alt="" className="w-full rounded-3xl" />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        I'm a passionate Full Stack Developer with hands-on experience building scalable web applications using React.js, Node.js, Express.js, Mongodb and Next.js. I've contributed to production systems serving 1,000+ users, integrated payment gateways, and built AI-powered features — currently exploring AI-assisted development and automation to push software quality further.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index)=>(
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                                <Image src={icon} alt='title' className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>

                            </li>
                        ))}
                    </ul>


                </div>
            </div>

        </div>
    )
}

export default About