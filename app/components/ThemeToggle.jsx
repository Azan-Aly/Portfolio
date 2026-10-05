"use client";

import React from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets';

function sunIcon() {
    return (
        <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <circle cx='12' cy='12' r='5' />
            <line x1='12' y1='1' x2='12' y2='3' />
            <line x1='12' y1='21' x2='12' y2='23' />
            <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
            <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
            <line x1='1' y1='12' x2='3' y2='12' />
            <line x1='21' y1='12' x2='23' y2='12' />
            <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
            <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
        </svg>
    )
}

function moonIcon() {
    return (
        <Image src={assets.moon_icon} alt="Moon Icon" className="w-[26px] h-[26px]" />
    )
}

const ThemeToggle = ({ theme, onToggle }) => {
    if (theme === undefined) {
        return <div className='w-6 h-6' />;
    }

    return (
        <button
            type='button'
            onClick={onToggle}
            aria-label='Toggle dark mode'
            className='p-2 rounded-full bg-transparent text-slate-700 transition hover:scale-110 active:scale-95 dark:text-slate-100 cursor-pointer'>
            {theme === 'dark' ? sunIcon() : moonIcon()}
        </button>
    )
}

export default ThemeToggle