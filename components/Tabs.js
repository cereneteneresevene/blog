"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

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
    <div className='p-5 m-5 bg-gray-100 dark bg-purple-700 flex items-center justify-center gap-7 '>
        {
            tabs.map((tab,i)=>(
                <Link className={`cursor-pointer hover:opacity-80 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-orange-600" : ""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
            ))
        }
    </div>
  )
}

export default Tabs