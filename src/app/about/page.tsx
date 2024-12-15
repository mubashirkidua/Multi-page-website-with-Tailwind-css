import React from 'react'

const About = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{ backgroundImage: "url('/background.jpeg')" }}>
    <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
        <h2 className='text-4xl font-bold mb-4' data-aos="fade-up">About Us</h2>
        <p>Quality Footballs is a name of brand. This is an online app where 
            can buy different kinds of Footballs. like Pakistani footballs,
            Chinese footballs and other imported footballs. It has likeable
            quality and colorfull footballs in affordable prices. </p>

    </div>
    </section>
 
  );
};

export default About;
