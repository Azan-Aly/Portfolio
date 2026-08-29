import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { workData } from '@/assets/assets'

export function generateStaticParams() {
  return workData.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = workData.find((item) => item.slug === slug)

  return project ? { title: project.title, description: project.longDescription } : {}
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params
  const project = workData.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  const { title, description, longDescription, techStack, features, projectUrl, screenshots } = project

  return (
    <main className='min-h-screen bg-white px-6 py-10 text-slate-800 md:px-12 lg:px-20'>
      <div className='mx-auto max-w-6xl'>
        <Link href='/#work' className='inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-violet-600 transition hover:text-fuchsia-600'>
          <span aria-hidden='true'>←</span> Back to work
        </Link>

        <section className='mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end'>
          <div>
            <p className='mb-4 font-mono text-xs uppercase tracking-[0.28em] text-fuchsia-500'>{description}</p>
            <h1 className='max-w-3xl font-Ovo text-5xl font-bold leading-tight text-slate-900 md:text-7xl'>{title}</h1>
            <p className='mt-6 max-w-2xl font-mono text-sm leading-7 text-slate-500'>{longDescription}</p>
            <a href={projectUrl} target='_blank' rel='noreferrer' className='mt-8 inline-flex items-center gap-3 rounded-full border border-violet-300 bg-violet-50 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-violet-700 transition hover:border-violet-500 hover:bg-violet-100'>
              Open live project <span className='text-base'>↗</span>
            </a>
          </div>

          <div className='relative min-h-72 overflow-hidden rounded-3xl border border-violet-200 bg-violet-50 shadow-[0_16px_50px_rgba(139,92,246,0.12)]'>
            <Image src={screenshots[0]} alt={`${title} preview`} fill priority sizes='(max-width: 1024px) 100vw, 45vw' className='object-cover' />
            <div className='absolute inset-0 bg-linear-to-t from-white/35 to-transparent' />
          </div>
        </section>

        <section className='mt-20 grid gap-10 border-t border-violet-100 pt-10 md:grid-cols-2'>
          <div>
            <p className='font-mono text-xs uppercase tracking-[0.25em] text-violet-500'>Technology</p>
            <div className='mt-5 flex flex-wrap gap-3'>
              {techStack.map((technology) => <span key={technology} className='rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 font-mono text-xs text-cyan-700'>{technology}</span>)}
            </div>
          </div>
          <div>
            <p className='font-mono text-xs uppercase tracking-[0.25em] text-violet-500'>Highlights</p>
            <ul className='mt-5 space-y-3 font-mono text-sm text-slate-500'>
              {features.map((feature) => <li key={feature} className='flex gap-3'><span className='text-fuchsia-500'>+</span>{feature}</li>)}
            </ul>
          </div>
        </section>

        <section className='mt-20'>
          <div className='flex items-end justify-between gap-4'>
            <div>
              <p className='font-mono text-xs uppercase tracking-[0.25em] text-violet-500'>Visual archive</p>
              <h2 className='mt-3 font-Ovo text-3xl font-bold text-slate-900 md:text-4xl'>Project screenshots</h2>
            </div>
            <span className='font-mono text-xs text-slate-400'>{screenshots.length.toString().padStart(2, '0')} views</span>
          </div>
          <div className='mt-8 grid gap-5 md:grid-cols-2'>
            {screenshots.map((screenshot, index) => (
              <div key={screenshot.src || index} className='relative aspect-16/10 overflow-hidden rounded-2xl border border-violet-100 bg-slate-50'>
                <Image src={screenshot} alt={`${title} screenshot ${index + 1}`} fill sizes='(max-width: 768px) 100vw, 50vw' className='object-cover' />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
