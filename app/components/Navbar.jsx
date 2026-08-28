"use client";

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [isScroll])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-75%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' loading='eager' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
                <Link href='#top'>
                    <span className="text-4xl text-gray-900 tracking-tight ml-6">Azan<span className="text-[#c026d3] font-bold">.</span></span>
                </Link>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "shadow-sm bg-white/50"} `}>

                    <li className='font-Ovo'>
                        <Link href="#top">Home</Link>
                    </li>
                    <li className='font-Ovo'>
                        <Link href="#about">About me</Link>
                    </li>
                    <li className='font-Ovo'>
                        <Link href="#services">Services</Link>
                    </li>
                    <li className='font-Ovo'>
                        <Link href="#work">My Work</Link>
                    </li>
                    <li className='font-Ovo'>
                        <Link href="#contact">Contact me</Link>
                    </li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <Link href='https://wa.me/923455227145' target='_blank' aria-label='WhatsApp' className='hidden lg:flex items-center gap-3 px-8 py-2 bg-[#25D366] hover:bg-[#25ab56] transition-transform border border-gray-500 rounded-full ml-4 font-Ovo'>

                        <svg viewBox='0 0 24 24' className='w-6 h-6 text-white fill-current' aria-hidden='true'><path d='M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.33-1.66a11.88 11.88 0 0 0 5.65 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.45-8.41Zm-8.44 18.25h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.66-.23-.38a9.85 9.85 0 0 1-1.51-5.22C2.19 6.45 6.63 2 12.08 2a9.84 9.84 0 0 1 7.01 2.91A9.85 9.85 0 0 1 22 11.9c0 5.44-4.45 9.83-9.92 9.83Zm5.42-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z' /></svg>

                        <span className='text-white'>
                            WhatsApp
                        </span>
                    </Link>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>


                {/* ------------ mobile menu ----------- */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 '>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link href="#top">Home</Link>
                    </li>
                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link href="#about">About me</Link>
                    </li>
                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link href="#services">Services</Link>
                    </li>
                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link href="#work">My Work</Link>
                    </li>
                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar