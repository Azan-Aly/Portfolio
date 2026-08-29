import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-22 pb-8 flex flex-col items-center justify-center gap-2">
      <div className='justify-center items-center flex'>
        <Image src={assets.hero_pic} alt='' className='rounded-full w-36 h-36 object-cover' />
      </div>
      <h2 className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-1.5 font-Ovo'>
        Hi! I&apos;m Muhammad Azan Ali
        <Image src={assets.hand_icon} alt='' className='w-6 ' />
      </h2>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Full Stack Developer based in Pakistan.
      </h1>

      <p className='max-w-3xl mx-auto font-Ovo'>I am a MERN & FULLSTACK Developer from Pakistan, with hands-on experience building scalable web apps using React.js, Node.js, and Next.js — currently exploring AI-assisted development, agents and automation.</p>
      {/* buttons */}
      <div className='flex flex-col sm:flex-row  gap-4 items-center justify-center mt-4'>
        <Link href="#contact" className='px-10 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4 ' /> </Link>
        <Link href="/resume.pdf" download className='px-10 py-2 border rounded-full border-gray-500 flex items-center gap-2' >my resume <Image src={assets.download_icon} alt='' className='w-4 ' /> </Link>
      </div>

      {/* svgs */}
      <div className='flex items-center justify-center gap-5 mt-6'>
        <Link href='https://github.com/Azan-Aly' target='_blank' aria-label='GitHub' className='text-gray-600 hover:text-black hover:scale-110 transition-transform'>
          <svg viewBox='0 0 24 24' className='w-8 h-8 fill-current' aria-hidden='true'><path d='M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z' /></svg>
        </Link>
        <Link href='https://www.linkedin.com/in/azanaly/' target='_blank' aria-label='LinkedIn' className='text-gray-600 hover:text-[#0A66C2] hover:scale-110 transition-transform'>
          <svg viewBox='0 0 24 24' className='w-8 h-8 fill-current' aria-hidden='true'><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
        </Link>
        <Link href='https://facebook.com/mr.azanaly' target='_blank' aria-label='Facebook' className='text-gray-600 hover:text-[#1877F2] hover:scale-110 transition-transform'>
          <svg viewBox='0 0 24 24' className='w-8 h-8 fill-current' aria-hidden='true'><path d='M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.15 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.04 1.79-4.72 4.54-4.72 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.29h3.33l-.53 3.49h-2.8V24C19.61 23.15 24 18.1 24 12.07Z' /></svg>
        </Link>
        <Link href='https://www.instagram.com/mr.azan_aly' target='_blank' aria-label='Instagram' className='text-gray-600 hover:text-[#E1306C] hover:scale-110 transition-transform'>
          <svg viewBox='0 0 24 24' className='w-8 h-8 fill-current' aria-hidden='true'><path d='M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.5.18.92.45 1.32.85.4.4.67.82.85 1.32.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22a3.7 3.7 0 0 1-.85 1.32 3.7 3.7 0 0 1-1.32.85c-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.32-.85 3.7 3.7 0 0 1-.85-1.32c-.16-.42-.36-1.05-.41-2.22C2.17 15.46 2.16 15.08 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.18-.5.45-.92.85-1.32.4-.4.82-.67 1.32-.85.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16Zm0-2.16C8.75 0 8.33.01 7.05.07 5.78.13 4.9.33 4.13.63a5.9 5.9 0 0 0-2.14 1.4A5.9 5.9 0 0 0 .59 4.17C.29 4.94.09 5.82.03 7.09.01 8.37 0 8.79 0 12s.01 3.63.07 4.91c.06 1.27.26 2.15.56 2.92a5.9 5.9 0 0 0 1.4 2.14 5.9 5.9 0 0 0 2.14 1.4c.77.3 1.65.5 2.92.56 1.28.06 1.7.07 4.91.07s3.63-.01 4.91-.07c1.27-.06 2.15-.26 2.92-.56a5.9 5.9 0 0 0 2.14-1.4 5.9 5.9 0 0 0 1.4-2.14c.3-.77.5-1.65.56-2.92.06-1.28.07-1.7.07-4.91s-.01-3.63-.07-4.91c-.06-1.27-.26-2.15-.56-2.92a5.9 5.9 0 0 0-1.4-2.14A5.9 5.9 0 0 0 19.87.63c-.77-.3-1.65-.5-2.92-.56C15.67.01 15.25 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8Zm7.85-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z' /></svg>
        </Link>
        <Link href='https://youtube.com' target='_blank' aria-label='YouTube' className='text-gray-600 hover:text-[#FF0000] hover:scale-110 transition-transform'>
          <svg viewBox='0 0 24 24' className='w-8 h-8 fill-current' aria-hidden='true'><path d='M23.5 6.19a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.01 3.01 0 0 0 .5 6.19 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.81 3.01 3.01 0 0 0 2.12 2.13c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.01 3.01 0 0 0 2.12-2.13A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.81ZM9.55 15.5v-7L15.82 12l-6.27 3.5Z' /></svg>
        </Link>
      </div>
    </div>
  )
}

export default Header