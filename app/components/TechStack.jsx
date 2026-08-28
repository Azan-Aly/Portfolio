import React from 'react'
import { toolsData, techstackData, } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'


const TechStack = () => {
    return (
        <div className='w-11/12 max-w-6xl mx-auto py-16 text-center flex flex-col items-center justify-center gap-12'>
            <div className='w-full'>
                <h3 className='mt-0 mb-24 text-gray-700 font-Ovo text-4xl sm:text-5xl'>My Tech Stack</h3>

                <ul className='flex flex-wrap items-center justify-center gap-6 sm:gap-10'>
                    {techstackData.map((tool, index) => (
                        <li key={index} tabIndex={0} aria-label={tool.title} className='group w-24 sm:w-32 aspect-square cursor-pointer outline-none hover:-translate-y-2 focus:-translate-y-2 duration-500'>
                            <div className='relative h-full w-full transform-3d transition-transform duration-700 group-hover:transform-[rotateY(180deg)] group-focus:transform-[rotateY(180deg)]'>
                                <div className='absolute inset-0 flex items-center justify-center backface-hidden'>
                                    <Image src={tool.image} alt='' className='w-16 sm:w-32' />
                                </div>
                                <div className='absolute inset-0 flex items-center justify-center px-2 text-center text-lg font-semibold text-gray-700 backface-hidden transform-[rotateY(180deg)]'>
                                    {tool.title}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='w-full'>

                <h3 className='mt-10 mb-24 text-gray-700 font-Ovo text-4xl sm:text-5xl'>Tools I use</h3>

                <ul className='flex flex-wrap items-center justify-center gap-6 sm:gap-10'>
                    {toolsData.map((tool, index) => (
                        <li key={index} tabIndex={0} aria-label={tool.title} className='group w-24 sm:w-32 aspect-square cursor-pointer outline-none hover:-translate-y-2 focus:-translate-y-2 duration-500'>
                            <div className='relative h-full w-full transform-3d transition-transform duration-700 group-hover:transform-[rotateY(180deg)] group-focus:transform-[rotateY(180deg)]'>
                                <div className='absolute inset-0 flex items-center justify-center backface-hidden'>
                                    <Image src={tool.image} alt={tool.title} className='w-16 sm:w-32' />
                                </div>
                                <div className='absolute inset-0 flex items-center justify-center px-2 text-center text-lg font-semibold text-gray-700 backface-hidden transform-[rotateY(180deg)]'>
                                    {tool.title}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>


        </div>

    )
}

export default TechStack