import { useState } from 'react'
import './App.css'

import Hero from './components/Hero'
import GetStarted from './components/GetStarted'
import Billing from './components/Billing'
import PaymentMethod from './components/PaymentMethod'
import Testimonials from './components/Testimonials'
import Companies from './components/Companies'
import TryOut from './components/TryOut'
import Footer from './components/Footer'
import NavBar from './components/Navbar'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <GetStarted />
      <Billing />
      <PaymentMethod />
      <Testimonials />
      <Companies />
      <div className='flex justify-center'>
        <TryOut />
      </div>
      <Footer />
    </>
  )
}

export default App
