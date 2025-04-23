import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Timeline from './Pages/Timeline'
import Venue from './Pages/Venue'
import Prize from './Pages/Prize'
import Sponser from './Pages/Sponser'
import Team from './Pages/Team'
import Faq from './Pages/Faq'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/prize" element={<Prize />} />
            <Route path="/sponser" element={<Sponser />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
