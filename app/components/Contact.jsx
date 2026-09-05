"use client";

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    setIsSuccess(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3_FORM_ACCESS_KEY;

    if (!accessKey) {
      setIsSuccess(false);
      setResult("The contact form is not configured. Please email work.azan.dev@gmail.com directly.");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResult("Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        setIsSuccess(false);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setIsSuccess(false);
      setResult("Network error. Please check your internet connection or email directly at work.azan.dev@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='w-full px-[10%] sm:px-[12%] mb-12 py-16 scroll-mt-20 dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(168,85,247,0.15),transparent_70%)] bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-size-[90%_auto] dark:text-white'>
      <p className='text-center mb-2 text-lg font-Ovo text-slate-700 dark:text-slate-200'>Let&apos;s work together</p>
      <h2 className='text-center text-5xl font-Ovo dark:text-white'>Contact me</h2>
      <p className='max-w-2xl mx-auto mt-6 text-center font-Ovo text-slate-700 dark:text-slate-300 leading-relaxed'>
        Have a web application, API, or mobile product in mind? Get in touch to discuss how I can help turn your idea into a reliable digital experience.
      </p>
      <form className='max-w-2xl mx-auto' onSubmit={onSubmitHandler}>
        <div className='grid sm:grid-cols-2 gap-6 mt-10 mb-8'>
          <input type="text" name='name' placeholder='Enter your name' required className='p-3.5 outline-none border border-gray-400 rounded-xl bg-white/90 text-slate-900 placeholder:text-slate-500 transition-all focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/25 dark:border-slate-600 dark:bg-[#16092b]/90 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-fuchsia-400 dark:focus:ring-fuchsia-400/30' />
          <input type="email" name='email' placeholder='Enter your email' required className='p-3.5 outline-none border border-gray-400 rounded-xl bg-white/90 text-slate-900 placeholder:text-slate-500 transition-all focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/25 dark:border-slate-600 dark:bg-[#16092b]/90 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-fuchsia-400 dark:focus:ring-fuchsia-400/30' />
        </div>
        <textarea rows={6} placeholder='Enter your message' name='message' required className='w-full p-4 outline-none border border-gray-400 rounded-xl bg-white/90 text-slate-900 placeholder:text-slate-500 mb-6 transition-all focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/25 dark:border-slate-600 dark:bg-[#16092b]/90 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-fuchsia-400 dark:focus:ring-fuchsia-400/30'></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className='py-3.5 px-10 w-max flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full cursor-pointer mx-auto transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg'
        >
          <span>{isSubmitting ? 'Sending...' : 'Submit now'}</span>
          <Image src={assets.right_arrow_white} alt='' className='w-4 dark:invert' />
        </button>

        {result && (
          <p className={`mt-6 text-center text-sm font-medium ${isSuccess === true ? 'text-emerald-600 dark:text-emerald-400' : isSuccess === false ? 'text-rose-600 dark:text-rose-400' : 'text-slate-700 dark:text-slate-300'}`}>
            {result}
          </p>
        )}
      </form>
    </section>
  )
}

export default Contact