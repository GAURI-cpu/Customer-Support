import Navbar from '@/components/landing/nav'
import Features from '@/components/landing/nav/features'
import Footer from '@/components/landing/nav/footer'
import Hero from '@/components/landing/nav/hero'
import Integration from '@/components/landing/nav/integration'
import Pricing from '@/components/landing/nav/pricing'
import Socialproof from '@/components/landing/nav/social'
import React from 'react'

const Page = () => {
  return (
    <div>
      <main className='w-full flex flex-col relative'>
        <Navbar/>
        <Hero/>
        <Socialproof/>
        <Features/>
        <Integration/>
        <Pricing/>
        <Footer/>
      </main>
    </div>
  )
}

export default Page
