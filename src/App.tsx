import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Landing'
import NotFoundPage from './pages/Notfound'
import NavBar from './layout/Navbar'
import Footer from './layout/Footer'

function App() {
  return (
    <>
     <div className='flex flex-col h-screen'>
      <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
     </div>
    </>
  )
}

export default App
