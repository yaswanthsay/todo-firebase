import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </div>
  )
}

export default App
