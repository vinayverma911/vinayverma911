import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Work from './pages/Work'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/experience" element={<Navigate to="/work" replace />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
