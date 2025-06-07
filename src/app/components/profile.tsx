'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Profile = () => {
    return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative w-full group"
    >
      <motion.div
        variants={{
          rest: { x: 0, y: 0 },
          hover: { x: 4, y: 4 },
        }}
        transition={{ duration: 0.5 }}
        className="w-full h-full absolute top-0 left-0 bg-green-500 rounded-lg shadow-lg z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-navy mix-blend-screen z-10 pointer-events-none" />
      <motion.div
        variants={{
          rest: { x: 14, y: 14 },
          hover: { x: 16, y: 16 },
        }}
        transition={{ duration: 0.5 }}
        className="absolute w-full h-full rounded-lg border-2 border-green-500 z-0"
      />
      <motion.div
        variants={{
          rest: { filter: 'grayscale(100%) contrast(1)', mixBlendMode: 'multiply' },
          hover: { filter: 'grayscale(0%) contrast(1)', mixBlendMode: 'normal' },
        }}
        transition={{ duration: 0.3 }}
        className="relative z-20 rounded-lg overflow-hidden"
      >
        <Image
          src="/images/me.jpg"
          alt="Me"
          width={450}
          height={450}
          className="rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
}

export default Profile;