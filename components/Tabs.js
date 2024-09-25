"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

const Tabs = () => {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  const tabs = [
    {
        name: "Gezi",
        url: "travel",
    },
    {
        name: "Yemek Tarifleri",
        url: "cook",
    },
    {
        name: "Dizi-Film Önerileri",
        url: "suggestion",
    },
  ]
  
  return (
    <div className='p-5 m-5 bg-purple-400 dark:bg-purple-700 flex items-center justify-center gap-7 mx-36'>
        {
            tabs.map((tab, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    className={`cursor-pointer hover:opacity-80 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-orange-600" : ""}`} 
                    href={`/?genre=${tab.url}`}
                  >
                    {tab.name}
                  </Link>
                </motion.div>
            ))
        }
    </div>
  )
}

export default Tabs;
