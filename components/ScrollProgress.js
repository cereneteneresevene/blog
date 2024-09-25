"use client"; // Bunu en üste ekleyin

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  // useScroll hook'unu kullanıyoruz
  const { scrollYProgress } = useScroll();
  
  // Smooth bir animasyon için useSpring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '7px',
        backgroundColor: '#4c1d95', // Tailwind'den mavi
        scaleX: scaleX, // Yatayda kaydırma ilerlemesi
        transformOrigin: '0%', // Soldan sağa büyüme
        zIndex: 1000
      }}
    />
  );
}
