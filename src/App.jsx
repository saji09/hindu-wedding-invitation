import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Couple from './components/Couple'
import Events from './components/Events'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Couple />
        <Events />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </div>
  )
}

export default App