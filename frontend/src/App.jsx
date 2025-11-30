import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
const App = () => {
  return (
    <div className=''>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/login' element={<LoginPage/>} />
     </Routes>
    </div>
  )
}

export default App