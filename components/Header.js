"use client"; // Bu bileşeni istemci bileşeni olarak işaretle

import React from 'react';
import MenuItem from './MenuItem';
import { ThemeComp } from './ThemeComp';
import { motion } from 'framer-motion'; // Framer Motion'ı doğru bir şekilde ekle

const Header = () => {
  const menu = [
    {
      name: "Hakkımda",
      url: "https://github.com/cereneteneresevene",
    },
    {
      name: "Anasayfa",
      url: "/",
    },
  ];

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='flex items-center justify-between h-20 p-5 mx-32'>
      <motion.div
        className='bg-purple-500 rounded p-3 text-2xl font-bold cursor-pointer'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Blog
      </motion.div>

      <div className='flex items-center gap-10'>
        {
          menu.map((mn, i) => (
            <motion.div
              key={i}
              variants={menuItemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.1 }}
              className='cursor-pointer'
            >
              <MenuItem mn={mn} i={i} />
            </motion.div>
          ))
        }
        <ThemeComp/> {/* ThemeComp, menü öğelerinin yanına yerleştirildi */}
      </div>
    </div>
  );
}

export default Header;
