import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='w-full px-[12%] py-16 scroll-mt-20'>
      <p className='text-center mb-2 text-lg font-Ovo'>Let&apos;s work together</p>
      <h2 className='text-center text-5xl font-Ovo'>Contact me</h2>
      <p className='max-w-2xl mx-auto mt-6 text-center font-Ovo'>
        Have a web application, API, or mobile product in mind? Get in touch to discuss how I can help turn your idea into a reliable digital experience.
      </p>
      <a href='mailto:work.azan.dev@gmail.com' className='block w-fit mx-auto mt-8 rounded-full bg-black px-8 py-3 text-white'>
        work.azan.dev@gmail.com
      </a>
    </section>
  )
}

export default Contact