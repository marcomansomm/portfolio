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

  const apresentation = <p className="text-white mt-6 max-w-xl text-lg leading-relaxed"> Hello! My name is Brittany and I enjoy creating things that live on the internet. My
              interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot
              about HTML &amp; CSS!</p>;

  const experiences = (
    <p className="text-white mt-6 max-w-xl text-lg leading-relaxed">
      Fast-forward to today, and I’ve had the privilege of working at{' '}
        <a href="https://us.mullenlowe.com/">an advertising agency</a>,{' '}
        <a href="https://starry.com/">a start-up</a>,{' '}
        <a href="https://www.apple.com/">a huge corporation</a>, and{' '}
        <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
        main focus these days is building accessible, inclusive products and digital
        experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
        clients.
    </p>
  );

  const recently = (
    <p className="text-white mt-6 max-w-xl text-lg leading-relaxed">
        I also recently{' '}
        <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
        launched a course
        </a>{' '}
        that covers everything you need to build a web app with the Spotify API using Node
        &amp; React.
    </p>
  );

  const items = [apresentation, experiences, recently];

  return (
    <section id='about' className="py-20 px-8">
      <div className="flex flex-row items-center justify-around w-full max-w-7xl mx-auto">
        <div>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: items.length * 0.2 }}
            className="flex justify-center relative md:mx-25 mt-12 group"
          >
            <Profile pathPicture='me-2.jpg'/>
          </motion.div>
        </div>
        <div className="flex flex-col items-start justify-center px-4 md:px-20">
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
        </div>
      
      </div>
    </section>
    
  );
};

export default Hero;
