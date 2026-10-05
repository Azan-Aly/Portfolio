"use client";

import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const infoList = [
    { icon: <svg className='w-7 h-7 mt-3 text-slate-800 dark:text-slate-200' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='16 18 22 12 16 6'/><polyline points='8 6 2 12 8 18'/></svg>, title: 'Languages', description: 'React.js, Node.js, Express.js, MongoDB, Next.js' },
    { icon: <svg className='w-7 h-7 mt-3 text-slate-800 dark:text-slate-200' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M22 10v6M2 10l10-5 10 5-10 5z'/><path d='M6 12v5c3 3 9 3 12 0v-5'/></svg>, title: 'Education', description: 'BS Computer Science (2023-2027)' },
    { icon: <svg className='w-7 h-7 mt-3 text-slate-800 dark:text-slate-200' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><rect x='2' y='3' width='20' height='14' rx='2' ry='2'/><line x1='8' y1='21' x2='16' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/></svg>, title: 'Projects', description: 'Built more than 3 projects' }
];

const About = () => {
    return (
        <div id="about" className='w-full px-[12%] py-10 scroll-mt-20 dark:text-white'>
            <h4 className="text-center mb-2 text-lg font-Ovo text-slate-700 dark:text-slate-200">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo dark:text-white">About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className="w-64 sm:w-80 rounded-3xl max-w-none shadow-lg">
                    <Image src={assets.profiletwo} alt="Muhammad Azan Ali" priority placeholder='blur' width={320} height={400} className="rounded-3xl object-cover" style={{ width: '100%', height: 'auto', aspectRatio: '320/400' }} />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo tracking-wider text-slate-700 dark:text-slate-300 leading-relaxed'>
                        I&apos;m a passionate full-stack developer with hands-on experience building scalable web applications using React.js, Node.js, Express.js, MongoDB, and Next.js. I&apos;ve contributed to production systems serving 1,000+ users, integrated payment gateways, and built AI-powered features. I&apos;m currently exploring AI-assisted development and automation to push software quality further.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, title, description}, index)=>(
                            <li key={index} className='select-none border-[0.5px] border-gray-400 cursor-pointer dark:border-slate-700 rounded-3xl p-6 hover:shadow-xl active:shadow-xl hover:shadow-fuchsia-200/40 active:shadow-fuchsia-200/40 dark:hover:shadow-fuchsia-500/20 dark:active:shadow-fuchsia-500/20 hover:bg-[#fcf4ff] active:bg-[#fcf4ff] dark:hover:bg-white/5 dark:active:bg-white/5 hover:-translate-y-1 active:-translate-y-1 transition-all duration-300'>
                                {icon}
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