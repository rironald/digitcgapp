import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Latest from './Components/Latest'
import Newsletter from './Components/Newsletter'
import Cards from './Components/Cards'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Latest />
        <Newsletter />
        <Cards />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
