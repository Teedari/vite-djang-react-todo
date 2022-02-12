import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTodo from './pages/CreateTodo'

function App() {
 

  return (
    <div className="mobile-layout-outer">
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/todo' element={<CreateTodo />} />
      </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App
