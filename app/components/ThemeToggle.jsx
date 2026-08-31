"use client";

import { assets } from '@/assets/assets';
import React from 'react'
import Image from 'next/image';

function sunIcon() { return <Image className='w-6 border-none' alt='sun icon' src={assets.sun_icon} /> }
function moonIcon() { return <Image className='w-6 border-none' alt='moon icon' src={assets.moon_icon} /> }

const ThemeToggle = ({ theme, onToggle }) => {
    if (theme === undefined) {
        return <div className='w-6 h-6' />;
    }

    return (
        <button
            type='button'
            onClick={onToggle}
            aria-label='Toggle dark mode'
            className='p-2 rounded-full bg-transparent text-slate-700 transition hover:scale-110 dark:text-slate-100 cursor-pointer'>
            {theme === 'dark' ? sunIcon() : moonIcon()}
        </button>
    )
}

export default ThemeToggle