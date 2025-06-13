import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
} from 'react-icons/si';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { navDelay } from '../utils';

const technologies = [
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'NestJS', icon: <SiNestjs /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

export default function TechStack() {
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
      if (shouldReduceMotion) return;
  
      const timeout = setTimeout(() => setIsMounted(true), navDelay);
      return () => clearTimeout(timeout);
    }, []);
  
  return (
    <section id='technologies' className="py-20 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-500">
            Technologies I Use
        </h2>
      <div className="flex flex-wrap jdustify-center gap-8 max-w-6xl mx-auto">
        {technologies.map((tech , index) => (
          <motion.div 
            key={index}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            className="group flex flex-col items-center transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl md:text-5xl text-slate dark:text-slate group-hover:text-green transition-colors duration-300">
              {tech.icon}
            </div>
            <span className="mt-2 text-sm md:text-base text-slate dark:text-slate group-hover:text-green transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
