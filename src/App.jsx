import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import AdserverOnline from './components/AdserverOnline'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <AdserverOnline>
      <Router basename={import.meta.env.PROD ? '/react-demo' : '/'}>
        <div className="min-h-screen flex flex-col">
          <Header
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <div className="flex flex-1 relative">
            <Sidebar
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <main className="flex-1 bg-white" role="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </AdserverOnline>
  )
}

export default App
