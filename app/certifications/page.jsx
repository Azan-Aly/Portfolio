import Image from 'next/image'
import Link from 'next/link'
import { certificateData } from '@/assets/assets'
import verifyBadge from '@/assets/verifybadge.png'
import { cleanSiteUrl } from '@/app/site-url'

export const metadata = {
  title: "Certifications",
  description: "View Muhammad Azan Ali's verified credentials in full-stack web development, Node.js, AI, Docker, SQL, and algorithms.",
  alternates: {
    canonical: `${cleanSiteUrl}/certifications`,
  },
  openGraph: {
    title: "Verified Certifications | Muhammad Azan Ali",
    description: "Explore the professional certifications and credentials of Muhammad Azan Ali.",
    url: `${cleanSiteUrl}/certifications`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Muhammad Azan Ali Certifications" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Certifications | Muhammad Azan Ali",
    description: "Explore the professional certifications and credentials of Muhammad Azan Ali.",
  },
  robots: { index: true, follow: true },
};

export default function CertificationsPage() {
  const certificationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muhammad Azan Ali Certifications",
    itemListElement: certificateData.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.title,
      description: `Issued by ${item.issuer} on ${item.date}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(certificationsSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className='min-h-screen bg-linear-to-br from-white via-fuchsia-50 to-cyan-50 px-[8%] py-10 text-gray-800 transition-colors duration-300 dark:from-[#11001F] dark:via-[#19072e] dark:to-[#0f041b] dark:text-slate-100'>
      <div className='mx-auto max-w-5xl'>
        <header className='flex items-center justify-between gap-6'>
          <Link href='/#top' className='text-3xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            Azan<span className='text-fuchsia-600'>.</span>
          </Link>
          <Link href='/#top' className='rounded-full border border-gray-400 px-5 py-2 text-sm text-slate-800 transition hover:bg-black hover:text-white dark:border-slate-600 dark:text-slate-200 dark:hover:bg-white dark:hover:text-black'>
            Back to portfolio
          </Link>
        </header>

        <section className='mx-auto max-w-3xl py-20 text-center'>
          <h1 className='mb-4 font-Ovo text-4xl font-semibold sm:text-6xl text-slate-900 dark:text-white'>Certifications</h1>
          <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-fuchsia-100 dark:bg-[#201037] dark:ring-fuchsia-900/40'>
            <Image src={verifyBadge} alt='Verified' className='h-12 w-12 object-contain' />
          </div>
          <p className='mt-8 font-Ovo text-lg font-medium text-fuchsia-700 dark:text-fuchsia-400'>Credentials and learning</p>
          <p className='mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300'>
            A record of completed courses and continued professional development across full-stack web development, backend engineering, AI, DevOps, databases, and algorithms.
          </p>
        </section>

        <section className='grid gap-6 pb-16 md:grid-cols-2' aria-label='Certificates'>
          {certificateData.map(({ title, issuer, date, image }) => (
            <article key={title} className='group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-fuchsia-300 hover:shadow-2xl hover:shadow-fuchsia-500/20 dark:border-slate-800 dark:bg-[#18092a] dark:hover:border-fuchsia-500/60 dark:hover:shadow-[0_12px_35px_rgba(217,70,239,0.3)]'>
              <div className='overflow-hidden'>
                <Image src={image} alt={`${title} certificate issued by ${issuer}`} className='aspect-14/10 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105' />
              </div>
              <div className='p-6'>
                <p className='text-sm font-semibold uppercase tracking-wide text-fuchsia-700 dark:text-fuchsia-400'>{issuer}</p>
                <h2 className='mt-2 font-Ovo text-xl leading-7 text-slate-900 dark:text-slate-100 font-semibold group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300 transition-colors'>{title}</h2>
                <p className='mt-3 text-sm text-slate-500 dark:text-slate-400'>Completed {date}</p>
              </div>
            </article>
          ))}
        </section>

        <section className='border-t border-gray-200 py-12 text-center dark:border-slate-800'>
          <h2 className='font-Ovo text-2xl text-slate-900 dark:text-white font-semibold'>Looking for project experience?</h2>
          <p className='mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300'>
            Explore the work behind the skills or get in touch to discuss a web, API, or mobile project.
          </p>
          <div className='mt-6 flex flex-wrap justify-center gap-4'>
            <Link href='/#work' className='rounded-full bg-black px-6 py-3 text-white transition hover:scale-105 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-500'>
              View my work
            </Link>
            <a href='mailto:work.azan.dev@gmail.com' className='rounded-full border border-gray-400 px-6 py-3 text-slate-800 transition hover:bg-black hover:text-white hover:scale-105 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-white dark:hover:text-black'>
              Contact me
            </a>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}

