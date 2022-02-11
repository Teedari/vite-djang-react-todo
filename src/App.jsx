import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <div className="mobile-layout-outer">
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App
