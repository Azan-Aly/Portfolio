import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { workData } from '@/assets/assets'

const Work = () => {
  return (
    <section id='work' className='mx-auto w-10/12 max-w-6xl scroll-mt-20 py-20 dark:text-white'>
      <div className='mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end'>
        <div>
          <p className='mb-3 font-mono text-xs uppercase tracking-[0.28em] text-violet-500'>Selected projects</p>
          <h2 className='font-Ovo text-5xl md:text-7xl font-bold bg-linear-to-br from-violet-700 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent tracking-tight'>My Latest Work</h2>
        <p className='max-w-lg font-Ovo text-base leading-7 text-slate-500 dark:text-slate-300'>Real-world projects built for production, from AI-powered pipelines to full-stack platforms.</p>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
        {workData.map(({ slug, title, description, bgImage, projectUrl }, index) => (
          <article
            key={title}
            className={`group relative isolate min-h-97.5 overflow-hidden rounded-[22px] border border-violet-200/80 bg-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-400/25 dark:border-violet-500/20 dark:bg-[#160d27] dark:hover:border-fuchsia-400/60 dark:hover:shadow-[0_12px_45px_rgba(217,70,239,0.35),0_0_25px_rgba(139,92,246,0.3),0_0_15px_rgba(6,182,212,0.2)] md:min-h-105 ${index === 0 ? 'md:col-span-7' : index === 1 ? 'md:col-span-5' : index === 2 ? 'md:col-span-4' : 'md:col-span-8'}`}
          >
            <Image
              src={bgImage}
              alt={title}
              fill
              sizes='(max-width: 768px) 100vw, 60vw'
              className='object-cover object-center opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90'
            />
            <div className='absolute inset-0 bg-linear-to-t from-white via-white/80 to-white/10 dark:from-[#11001F] dark:via-[#180425]/80 dark:to-[#11001F]/20 transition-opacity' />
            <span className='absolute left-7 top-6 font-mono text-xs tracking-[0.25em] text-slate-400 dark:text-slate-300'>0{index + 1}</span>
            <a href={projectUrl} target='_blank' rel='noopener noreferrer' aria-label={`Open ${title} project`} className='absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-violet-300 bg-white/75 text-sm text-violet-600 transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-md hover:shadow-fuchsia-400/40 dark:border-violet-500/40 dark:bg-[#1b0a2e]/70 dark:text-violet-200 dark:hover:border-fuchsia-400 dark:hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]'>↗</a>
            <div className='absolute inset-x-7 bottom-7'>
              <div className='mb-4 flex flex-wrap gap-2'>
                <span className='rounded-full border border-violet-300 bg-violet-50/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-700 dark:border-violet-400/30 dark:bg-violet-500/10 dark:text-violet-200'>{description}</span>
                <span className='rounded-full border border-cyan-300 bg-cyan-50/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-200'>Web</span>
              </div>
              <h3 className='max-w-lg font-Ovo text-3xl font-bold leading-tight text-slate-800 dark:text-slate-100 group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300 transition-colors md:text-4xl'>{title}</h3>
              <p className='mt-3 max-w-xl font-mono text-xs leading-6 text-slate-500 dark:text-slate-300'>{description} project crafted with a focus on clarity, performance, and useful interaction.</p>
              <Link href={`/work/${slug}`} className='relative z-10 mt-5 inline-flex items-center gap-3 rounded-full border border-violet-300 bg-white/80 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-700 transition-all hover:border-violet-500 hover:bg-violet-50 hover:shadow-md hover:shadow-violet-400/30 dark:border-violet-500/40 dark:bg-[#1b0a2e]/70 dark:text-violet-200 dark:hover:border-fuchsia-400 dark:hover:bg-fuchsia-950/40 dark:hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]'>View details <span className='text-base'>→</span></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work