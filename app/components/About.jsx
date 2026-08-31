"use client";

import React from 'react'
import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'

const About = () => {
    return (
        <div id="about" className='w-full px-[12%] py-10 scroll-mt-20 dark:text-white'>
            <h4 className="text-center mb-2 text-lg font-Ovo text-slate-700 dark:text-slate-200">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo dark:text-white">About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className="w-64 sm:w-80 rounded-3xl max-w-none shadow-lg">
                    <Image src={assets.newpic} alt="Muhammad Azan Ali" priority className="w-full rounded-3xl object-cover" />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo text-slate-700 dark:text-slate-300 leading-relaxed'>
                        I&apos;m a passionate full-stack developer with hands-on experience building scalable web applications using React.js, Node.js, Express.js, MongoDB, and Next.js. I&apos;ve contributed to production systems serving 1,000+ users, integrated payment gateways, and built AI-powered features. I&apos;m currently exploring AI-assisted development and automation to push software quality further.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index)=>(
                            <li key={index} className='border-[0.5px] border-gray-400 dark:border-slate-700 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 dark:hover:bg-white/5 transition-all'>
                                <Image src={icon} alt={title} className='w-7 mt-3 dark:hidden' />
                                <Image src={iconDark || icon} alt={title} className='w-7 mt-3 hidden dark:block' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-slate-200'>{title}</h3>
                                <p className='text-gray-600 dark:text-slate-300 text-sm leading-relaxed'>{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About