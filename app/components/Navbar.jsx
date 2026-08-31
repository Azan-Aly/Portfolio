"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Pullcord from './Pullcord';
import ThemeToggle from './ThemeToggle';

const subscribeToTheme = (callback) => {
    if (typeof document === 'undefined') return () => { };
    const observer = new MutationObserver(() => callback());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
};

const getThemeSnapshot = () => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

const getThemeServerSnapshot = () => 'light';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getThemeServerSnapshot);
    const sideMenuRef = useRef(null);
    const navLinkClass = 'relative inline-flex items-center py-1 text-slate-700 transition-colors duration-300 hover:text-fuchsia-700 dark:text-slate-200 dark:hover:text-fuchsia-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-fuchsia-400/80 after:via-white after:to-cyan-300/80 dark:after:via-fuchsia-100 after:opacity-0 after:shadow-[0_0_8px_rgba(217,70,239,0.45),0_0_14px_rgba(103,232,249,0.3)] after:backdrop-blur-sm after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-100';

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        const nextTheme = isDark ? 'dark' : 'light';
        try {
            localStorage.setItem('theme', nextTheme);
        } catch { }
    };

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='fixed dark:hidden top-0 right-0 w-11/12 -z-10 translate-y-[-75%] pointer-events-none'>
                <Image src={assets.header_bg_color} alt='' className='w-full' priority />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[4%] py-4 flex items-center justify-between z-50 border-b transition-colors duration-300 ${isScroll ? "bg-white/70 dark:bg-[#180829]/80 backdrop-blur-lg shadow-sm shadow-slate-200/70 dark:shadow-slate-950/40 border-gray-200/50 dark:border-slate-600" : "border-transparent bg-transparent"}`}>
                <Link href='#top'>
                    <span className="text-4xl text-gray-900 dark:text-white tracking-tight ml-6 font-semibold">Azan<span className="text-[#c026d3] font-bold">.</span></span>
                </Link>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 border transition-colors duration-300 ${isScroll ? "border-transparent bg-transparent shadow-none" : "border-white/60 bg-white/50 shadow-sm dark:border-slate-600 dark:bg-white/5"} `}>
                    <li className='font-Ovo'>
                        <Link className={navLinkClass} href="#top">Home</Link>
                    </li>
                    <li className='font-Ovo'>
                        <Link className={navLinkClass} href="#about">About me</Link>
                    </li>
                    <li className='font-Ovo'>
                        <Link className={navLinkClass} href="#services">Services</Link>
                    </li>
                    <li className='font-Ovo'>
                        <Link className={navLinkClass} href="#work">My Work</Link>
                    </li>
                    <li className='font-Ovo'>
                        <Link className={navLinkClass} href="#contact">Contact me</Link>
                    </li>
                    <li className={`font-Ovo ${isScroll ? "hidden lg:block" : "hidden"} `}>
                        <Link className={navLinkClass} href="/certifications">Certificates</Link>
                    </li>
                </ul>

                <div className='flex items-center gap-2 sm:gap-4'>
                    <Link href='https://wa.me/923455227145' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp' className='flex items-center gap-2 lg:gap-3 p-2 lg:px-7 lg:py-2 bg-[#25D366] hover:bg-[#25ab56] transition-transform rounded-full font-Ovo'>
                        <svg viewBox='0 0 24 24' className='w-5 h-5 sm:w-6 sm:h-6 text-white fill-current' aria-hidden='true'><path d='M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.33-1.66a11.88 11.88 0 0 0 5.65 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.45-8.41Zm-8.44 18.25h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.66-.23-.38a9.85 9.85 0 0 1-1.51-5.22C2.19 6.45 6.63 2 12.08 2a9.84 9.84 0 0 1 7.01 2.91A9.85 9.85 0 0 1 22 11.9c0 5.44-4.45 9.83-9.92 9.83Zm5.42-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z' /></svg>
                        <span className='hidden lg:inline text-white font-medium'>WhatsApp</span>
                    </Link>

                    <ThemeToggle theme={theme} onToggle={toggleTheme} />
                    <button type='button' aria-label='Open navigation menu' className='block md:hidden ml-1 sm:ml-2 cursor-pointer p-1 rounded-lg border border-transparent dark:border-slate-600' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6 dark:hidden' />
                        <Image src={assets.menu_white} alt='' className='w-6 hidden dark:block' />
                    </button>
                    <Pullcord theme={theme} onToggle={toggleTheme} />
                </div>

                {/* ------------ mobile menu ----------- */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 text-slate-800 transition-transform duration-500 shadow-2xl dark:bg-[#170d2a] dark:text-slate-100 border-l border-transparent dark:border-slate-600'>
                    <button type='button' aria-label='Close navigation menu' className='absolute right-6 top-6 cursor-pointer p-1' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 dark:hidden' />
                        <Image src={assets.close_white} alt='' className='w-5 hidden dark:block' />
                    </button>

                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link className={navLinkClass} href="#top">Home</Link>
                    </li>
                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link className={navLinkClass} href="#about">About me</Link>
                    </li>
                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link className={navLinkClass} href="#services">Services</Link>
                    </li>
                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link className={navLinkClass} href="#work">My Work</Link>
                    </li>
                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link className={navLinkClass} href="#contact">Contact me</Link>
                    </li>
                    <li className='font-Ovo' onClick={closeMenu}>
                        <Link className={navLinkClass} href="/certifications">My Certifications</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar