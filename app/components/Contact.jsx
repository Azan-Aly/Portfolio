"use client";

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setResult("Sending.....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.WEB3_FORM_ACCESS_KEY || "4538b3d7-07cc-424d-bbd0-b760f89ed449");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if(data.success){
      setResult("Form Submitted Successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <section id='contact' className='w-full px-[12%] mb-12 py-16 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-size-[:90%_auto]'>
      <p className='text-center mb-2 text-lg font-Ovo'>Let&apos;s work together</p>
      <h2 className='text-center text-5xl font-Ovo'>Contact me</h2>
      <p className='max-w-2xl mx-auto mt-6 text-center font-Ovo'>
        Have a web application, API, or mobile product in mind? Get in touch to discuss how I can help turn your idea into a reliable digital experience.
      </p>
      <form className='max-w-2xl mx-auto' onSubmit={onSubmitHandler}>
        <div className='grid sm:grid-cols-2 gap-6 mt-10 mb-8'>
          <input type="text" name='name' placeholder='Enter your name' required className='p-3 outline-none border border-gray-400 rounded-md bg-white' />
          <input type="email"name='email'  placeholder='Enter your email' required className='p-3 outline-none border border-gray-400 rounded-md bg-white' />
        </div>
        <textarea rows={6} placeholder='Enter your message' name='message' required className='w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6'></textarea>
        <button type="submit" className={`py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full cursor-pointer mx-auto hover:bg-black duration-500`} >
          <span> Submit now</span> <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
        </button>

        <p className='mt-4'>{result}</p>
      </form>
      {/* <a href='mailto:work.azan.dev@gmail.com' className='block w-fit mx-auto mt-8 rounded-full bg-black px-8 py-3 text-white'>
        work.azan.dev@gmail.com
      </a> */}
    </section>
  )
}

export default Contact