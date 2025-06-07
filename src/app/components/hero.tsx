'use client';

import React, { useState, useEffect } from 'react';
import { navDelay } from '@/app/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Profile from './profile';


const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1 className="text-green-400 font-mono text-[clamp(14px,5vw,18px)] mb-7 ml-1">Hi, my name is</h1>;

  const two = (
    <h2 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl leading-tight">
      Marcoantonio Manso.
    </h2>
  );

  const three = (
    <h3 className="text-slate-400 font-bold text-4xl sm:text-5xl md:text-6xl leading-snug mt-2">
      Jr. FullStack Developer.
    </h3>
  );

  const four = (
    <p className="text-white mt-6 max-w-xl text-lg leading-relaxed">
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.{' '}
      <a
        href="https://upstatement.com/"
        target="_blank"
        rel="noreferrer"
        className="text-green-400 hover:underline"
      >
        Lorem Ipsum
      </a>
      .
    </p>
  );

  const five = (
    <a
      className="inline-block mt-10 border-2 border-green-400 text-green-400 px-6 py-3 rounded-md font-mono text-sm hover:bg-green-400 hover:text-black transition"
      href="https://www.newline.co/courses/build-a-spotify-connected-app"
      target="_blank"
      rel="noreferrer"
    >
      Lorem Ipsum!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <div className="flex flex-row items-center justify-around w-full max-w-8xl mx-auto">
      <section className="flex flex-col items-start justify-center h-screen px-4 md:px-20">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
              className="mb-4"
            >
              {item}
            </motion.div>
          ))}
      </section>
      <section>
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: items.length * 0.2 }}
          className="flex justify-center relative md:mx-auto mt-12 group"
        >
          <Profile />
        </motion.div>
      </section>
    </div>
    
  );
};

export default Hero;
