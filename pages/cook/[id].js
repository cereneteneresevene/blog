"use client"; // Framer Motion kullanımı için gerekli

import React from "react";
import Header from "../../components/Header";
import "../../app/globals.css";
import { useRouter } from "next/router";
import Providers from "@/app/Providers";
import { motion } from "framer-motion";
import ScrollProgress from "../../components/ScrollProgress"; // ScrollProgress'i import et

const cookPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Yemek tarifine özel sabit görsel URL'si
  const imageUrl = id ? `https://picsum.photos/id/101${id}/400/600` : "";

  const incrementedId = id ? parseInt(id) - 2 : "";

  return (
    <div>
      <Providers>
        <Header />
        <ScrollProgress /> {/* ScrollProgress bileşenini ekle */}
        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:space-x-8 my-32">
          {id ? (
            <>
              <motion.img
                src={imageUrl}
                alt={`Yemek Tarifi Görsel ${id}`}
                className="rounded-md shadow-lg"
                width={400}
                height={600}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <div className="mt-6 lg:mt-0 max-w-lg">
                <motion.h1
                  className="text-2xl font-bold mb-4 text-center lg:text-left"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Yemek Tarifi İçeriği: {incrementedId}
                </motion.h1>
                <motion.p
                  className="text-lg text-center lg:text-left"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla ornare ante nec pulvinar. Donec ultrices tincidunt diam malesuada gravida. Vestibulum finibus nunc eu tempor gravida. Nullam facilisis scelerisque hendrerit. Suspendisse egestas ligula lacus, cursus sodales mi convallis ac. Aliquam vestibulum, libero ut maximus laoreet, risus lorem finibus mi, et fermentum nisi tellus ut mauris. Suspendisse cursus sollicitudin eleifend. Curabitur molestie enim dapibus, aliquet nisi sed, bibendum mi. In hac habitasse platea dictumst. Vestibulum nisi quam, finibus non eleifend ut, tempus eu nisi. Suspendisse sagittis, risus non laoreet aliquam, mi ex sodales urna, ac tincidunt lacus mauris nec tellus. Quisque sem elit, cursus ac diam ac, volutpat imperdiet urna. Suspendisse non justo sed turpis tincidunt placerat. Curabitur lobortis porttitor interdum. Maecenas purus eros, aliquam sit amet pulvinar non, commodo sit amet elit. Praesent tristique justo congue enim ultrices, id posuere elit condimentum.
                </motion.p>
              </div>
            </>
          ) : (
            <p>Yükleniyor...</p>
          )}
        </div>
      </Providers>
    </div>
  );
};

export default cookPage;
