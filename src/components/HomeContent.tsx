"use client";

import React from 'react'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const HomeContent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
  return (
    <section className='hero h-screen flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url('/images.jpeg')"}}>
    <div className='pl-0 md:pl-16  text-black text-center'>
        <h1 className='text-6xl font-bold ' data-aos="fade-up">Welcome to Quality Footballs</h1>
        <p className='text-3xl mt-4'>Pure shining Leather and colorfull footballs</p>
        <button className='mt-6 px-6 py-3 bg-orange-500 hover:bg-blue-700 rounded-md font-bold'>Buy</button>

    </div>
    </section>
    
);
};

export default HomeContent;
