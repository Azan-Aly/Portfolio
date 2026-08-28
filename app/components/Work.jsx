import React from 'react'
import Image from 'next/image'
import { workData } from '@/assets/assets'

const Work = () => {
  return (
    <section id='work' className='w-10/12 max-w-6xl mx-auto py-16 scroll-mt-20'>
        <h2 className='text-6xl font-Ovo font-bold bg-linear-to-br from-violet-700 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent tracking-tight'>My Latest Work</h2>
        <p className='max-w-xl font-Ovo mt-4'>Real-world projects built for production — from AI-powered pipelines to full-stack platforms serving thousands of users.</p>

        <div className='gridContainer gap-6 mt-10'>
          {workData.map(({ title, description, bgImage }) => (
            <article key={title} className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm'>
              <Image src={bgImage} alt={title} width={640} height={400} className='h-56 w-full object-cover' />
              <div className='p-5'>
                <h3 className='font-Ovo text-xl text-gray-800'>{title}</h3>
                <p className='mt-2 text-sm text-gray-600'>{description}</p>
              </div>
            </article>
          ))}
        </div>
    </section>
  )
}

export default Work