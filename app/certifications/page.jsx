import Image from 'next/image'
import Link from 'next/link'
import { certificateData } from '@/assets/assets'
import verifyBadge from '@/assets/verifybadge.png'

export const metadata = {
  title: 'Certifications',
  description: 'View Muhammad Azan Ali\'s verified Udemy certificates in full-stack web development, Node.js, AI, Docker, SQL, and algorithms.',
  robots: { index: true, follow: true },
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
          <h1 className='mb-4 font-Ovo text-4xl font-semibold sm:text-6xl'>Certifications</h1>
          <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-fuchsia-100'>
            <Image src={verifyBadge} alt='' className='h-12 w-12 object-contain' />
          </div>
          <p className='mt-8 font-Ovo text-lg text-fuchsia-700'>Credentials and learning</p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            A record of completed courses and continued professional development across full-stack web development, backend engineering, AI, DevOps, databases, and algorithms.
          </p>
        </section>

        <section className='grid gap-6 pb-16 md:grid-cols-2' aria-label='Certificates'>
          {certificateData.map(({ title, issuer, date, image }) => (
            <article key={title} className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
              <Image src={image} alt={`${title} certificate issued by ${issuer}`} className='aspect-14/10 w-full object-cover object-top' />
              <div className='p-6'>
                <p className='text-sm font-semibold uppercase tracking-wide text-fuchsia-700'>{issuer}</p>
                <h2 className='mt-2 font-Ovo text-xl leading-7'>{title}</h2>
                <p className='mt-3 text-sm text-gray-600'>Completed {date}</p>
              </div>
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