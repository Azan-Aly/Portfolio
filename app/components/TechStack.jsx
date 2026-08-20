import React from 'react'
import { assets, toolsData, techstackData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'


const TechStack = () => {
    return (
        <div className='w-10/12 mx-auto text-center flex flex-col items-center justify-center'>
            <div>
                <h3 className='my-6 text-gray-700 font-Ovo text-3xl'>My Tech Stack</h3>
                {/* <ul className='flex items-center gap-3 sm:gap-5'>
                    {techstackData.map((tool, index) => (
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square object-cover border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src={tool.image} alt='icon' className='w-6' />
                            <span className='hidden hover:block'>{tool.title}</span>
                        </li>
                    ))}
                </ul> */}
                <p align="center">
                    <a href="https://skillicons.dev">
                        <img className='w-screen' src="https://skillicons.dev/icons?i=html,css,js,ts,tailwindcss,bootstrap,react,nodejs,express,mongodb,next,postgresql" />
                    </a>
                </p>
            </div>

            <div>

                <h3 className='my-6 text-gray-700 font-Ovo text-3xl'>Tools I use</h3>

                {/* <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index) => (
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src={tool} alt='icon' className='w-6' />
                            <span className='hidden hover:block'>{tool.name}</span>
                        </li>
                    ))}
                </ul> */}
                <div>
                <p align="center">
                    <a href="https://skillicons.dev">
                        <img className='w-11/12' src="https://skillicons.dev/icons?i=npm,git,github,vscode,postman,vite" />
                    </a>
                </p>
            </div>
            </div>

            
        </div>

    )
}

export default TechStack