import Navbar from '@/components/landing/nav'
import Hero from '@/components/landing/nav/hero'
import React from 'react'

const Page = () => {
  return (
    <div>
      <main className='w-full flex flex-col relative'>
        <Navbar/>
        <Hero/>
      </main>
    </div>
  )
}

export default Page
