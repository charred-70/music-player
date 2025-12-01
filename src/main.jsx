import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthTest from './Components/AuthTest.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='/' element={<AuthTest />} />
        <Route path='/player' element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
