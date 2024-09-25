"use client"; // Ensure this is a client component

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion

const Page = ({ searchParams }) => {
  const genre = searchParams.genre;

  // Her kategori için görsellerin URL'lerini oluştur
  const images = {
    travel: [
      `https://picsum.photos/id/1010/200/300`, // Gezi 1 için sabit görsel
      `https://picsum.photos/id/1011/200/300`, // Gezi 2 için sabit görsel
      `https://picsum.photos/id/1012/200/300`, // Gezi 3 için sabit görsel
    ],
    cook: [
      `https://picsum.photos/id/1013/200/300`, // Yemek 1 için sabit görsel
      `https://picsum.photos/id/1014/200/300`, // Yemek 2 için sabit görsel
      `https://picsum.photos/id/1015/200/300`, // Yemek 3 için sabit görsel
    ],
    suggestion: [
      `https://picsum.photos/id/1018/200/300`, // Dizi Film 1 için sabit görsel
      `https://picsum.photos/id/1019/200/300`, // Dizi Film 2 için sabit görsel
      `https://picsum.photos/id/1020/200/300`, // Dizi Film 3 için sabit görsel
    ],
  };

  const allImages = [
    ...images.travel,
    ...images.cook,
    ...images.suggestion,
  ];

  return (
    <div className="my-10 mx-36"> {/* Burada mx-auto ve max-w-screen-xl ekleniyor */}
      {genre === 'travel' ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.travel.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Final state
                exit={{ opacity: 0, y: 20 }} // Exit state
                transition={{ delay: index * 0.2 }} // Delay for sequential reveal
                className="flex flex-col items-center bg-purple-500 p-4 rounded-md shadow-md" // Arka plan beyaz ve çerçeve
              >
                <Link href={`/travel/${index}`}>
                  <motion.img
                    src={imageUrl}
                    alt={`Gezi ${index}`}
                    width={200}
                    height={300}
                    className="rounded-md cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Tıklanıldığında büyüme efekti
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <Link href={`/travel/${index}`} className="mt-2 text-black dark:text-white hover:underline">
                  Gezi {index + 1}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ) : genre === 'cook' ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.cook.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Final state
                exit={{ opacity: 0, y: 20 }} // Exit state
                transition={{ delay: index * 0.2 }} // Delay for sequential reveal
                className="flex flex-col items-center bg-purple-500 p-4 rounded-md shadow-md" // Arka plan beyaz ve çerçeve
              >
                <Link href={`/cook/${index + 3}`}>
                  <motion.img
                    src={imageUrl}
                    alt={`Yemek Tarifi ${index + 3}`}
                    width={200}
                    height={300}
                    className="rounded-md cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Tıklanıldığında büyüme efekti
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <Link href={`/cook/${index + 3}`} className="mt-2 text-black dark:text-white hover:underline">
                  Yemek Tarifi {index + 1}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ) : genre === 'suggestion' ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.suggestion.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Final state
                exit={{ opacity: 0, y: 20 }} // Exit state
                transition={{ delay: index * 0.2 }} // Delay for sequential reveal
                className="flex flex-col items-center bg-purple-500 p-4 rounded-md shadow-md" // Arka plan beyaz ve çerçeve
              >
                <Link href={`/suggestion/${index + 8}`}>
                  <motion.img
                    src={imageUrl}
                    alt={`Dizi Film Önerisi ${index + 8}`}
                    width={200}
                    height={300}
                    className="rounded-md cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Tıklanıldığında büyüme efekti
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <Link href={`/suggestion/${index + 8}`} className="mt-2 text-black dark:text-white hover:underline">
                  Dizi Film Önerisi {index + 1}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allImages.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Final state
                exit={{ opacity: 0, y: 20 }} // Exit state
                transition={{ delay: index * 0.2 }} // Delay for sequential reveal
                className="flex flex-col items-center bg-purple-500 p-4 rounded-md shadow-md" // Arka plan beyaz ve çerçeve
              >
                <Link 
                  href={index === 0 ? '/travel/0' : 
                        index === 1 ? '/travel/1' : 
                        index === 2 ? '/travel/2' : 
                        index === 3 ? '/cook/3' : 
                        index === 4 ? '/cook/4' : 
                        index === 5 ? '/cook/5' : 
                        index === 6 ? '/suggestion/8' : 
                        index === 7 ? '/suggestion/9' : 
                        index === 8 ? '/suggestion/10' : 
                        '/'}
                >
                  <motion.img
                    src={imageUrl}
                    alt={`Öneri ${index}`}
                    width={200}
                    height={300}
                    className="rounded-md cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Tıklanıldığında büyüme efekti
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <Link href={`/travel/${index}`} className="mt-2 text-black dark:text-white hover:underline">
                  Öneri {index + 1}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
