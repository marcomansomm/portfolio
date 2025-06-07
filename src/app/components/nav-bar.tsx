'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const navLinks = [
  { name: 'Home', path: '#' },
  { name: 'About', path: '#about' },
  { name: 'Contact', path: '#contact' },
];

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <div className="fixed z-50 w-full flex justify-center text-white font-bold">
      <div className="hidden md:flex items-center justify-center mt-8 border border-white backdrop-blur-md rounded-3xl p-2 max-w-[400px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="transition hover:text-white/50 duration-300 ease-in-out"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-6 right-14 border border-white/70 text-white/70 rounded p-2 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 transform transition-transform duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-5xl hover:text-white/50 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
