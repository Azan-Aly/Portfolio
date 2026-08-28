import Image from 'next/image'
import Link from 'next/link'
import verifyBadge from '@/assets/verifybadge.png'

export const metadata = {
  title: 'Certifications',
  description: 'Certifications for Muhammad Azan Ali.',
  robots: { index: false, follow: true },
}

export default function CertificationsPage() {
  return (
    <main className='min-h-screen bg-linear-to-br from-white via-fuchsia-50 to-cyan-50 px-[8%] py-10 text-gray-800'>
      <div className='mx-auto max-w-5xl'>
        <header className='flex items-center justify-between gap-6'>
          <Link href='/' className='text-3xl font-semibold tracking-tight'>
            Azan<span className='text-fuchsia-600'>.</span>
          </Link>
          <Link href='/' className='rounded-full border border-gray-400 px-5 py-2 text-sm transition hover:bg-black hover:text-white'>
            Back to portfolio
          </Link>
        </header>

        <section className='mx-auto max-w-3xl py-24 text-center'>
          <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-fuchsia-100'>
            <Image src={verifyBadge} alt='' className='h-12 w-12 object-contain' />
          </div>
          <p className='mt-8 font-Ovo text-lg text-fuchsia-700'>Credentials and learning</p>
          <h1 className='mt-3 font-Ovo text-4xl font-semibold sm:text-6xl'>Certifications</h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            This page is being prepared with verified certificates and professional credentials. New achievements will be added here as they are completed and documented.
          </p>
        </section>

        <section className='grid gap-5 pb-16 sm:grid-cols-3' aria-label='Certification focus areas'>
          {[
            ['Frontend engineering', 'React, Next.js, JavaScript, and accessible user interfaces.'],
            ['Backend engineering', 'Node.js, Express.js, APIs, authentication, and databases.'],
            ['Continuous learning', 'Current study across full-stack development and AI-assisted workflows.'],
          ].map(([title, description]) => (
            <article key={title} className='rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm'>
              <h2 className='font-Ovo text-xl'>{title}</h2>
              <p className='mt-3 text-sm leading-6 text-gray-600'>{description}</p>
            </article>
          ))}
        </section>

        <section className='border-t border-gray-200 py-12 text-center'>
          <h2 className='font-Ovo text-2xl'>Looking for project experience?</h2>
          <p className='mx-auto mt-3 max-w-xl text-gray-600'>
            Explore the work behind the skills or get in touch to discuss a web, API, or mobile project.
          </p>
          <div className='mt-6 flex flex-wrap justify-center gap-4'>
            <Link href='/?section=work' className='rounded-full bg-black px-6 py-3 text-white'>
              View my work
            </Link>
            <a href='mailto:work.azan.dev@gmail.com' className='rounded-full border border-gray-400 px-6 py-3'>
              Contact me
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}