import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Landing'
import NotFoundPage from './pages/Notfound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
