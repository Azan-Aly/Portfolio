import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-[9%] py-10 scroll-mt-20 dark:text-white'>
            <h4 className="text-center mb-2 text-lg font-Ovo text-slate-700 dark:text-slate-200">What I offer</h4>
            <h2 className="text-center text-5xl font-Ovo dark:text-white">My Services</h2>

            <p className='text-center max-w-2xl mx-auto my-8 font-Ovo text-slate-700 dark:text-slate-300 leading-relaxed'>
                I am a Full-Stack Developer from Pakistan with 2+ years of hands-on experience building scalable applications across internships, remote contracts, and on-site engineering roles.
            </p>

            <div className='gridContainer gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index} className='flex flex-col justify-between border border-gray-300 dark:border-slate-700 rounded-3xl p-6 hover:shadow-xl hover:shadow-fuchsia-200/40 dark:hover:shadow-fuchsia-500/20 hover:bg-[#fcf4ff] dark:hover:bg-white/5 hover:-translate-y-1 transition-all duration-300'>
                        <div>
                            <Image className='w-16 h-16 object-contain' src={icon} alt={title} />
                            <h3 className='text-lg font-semibold my-4 text-gray-800 dark:text-slate-200'>{title}</h3>
                            <p className='text-sm text-gray-600 dark:text-slate-300 leading-6'>{description}</p>
                        </div>
                        <Link href={link || '#contact'} className='inline-flex items-center gap-2 text-sm mt-6 font-medium text-slate-800 hover:text-fuchsia-700 dark:text-fuchsia-300 dark:hover:text-fuchsia-200 transition-colors'>
                            <span>Get in touch</span>
                            <Image src={assets.right_arrow} alt='' className='w-4 dark:invert' />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services