import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Latest from './Components/Latest'
import Newsletter from './Components/Newsletter'
import UpcomingEvents from './Components/UpcomingEvents'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Latest />
        <Newsletter />
        <UpcomingEvents />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
