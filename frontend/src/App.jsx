import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { WeatherProvider } from './context/WeatherContext'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WeatherPage from './pages/WeatherPage'
import Settings from './pages/Settings'
import './App.css'

function App() {
  return (
    <WeatherProvider>
      <LanguageProvider>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </WeatherProvider>
  )
}

export default App