import React from 'react'

import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import { ToastContainer } from 'react-toastify';
import AllExpert from './pages/AllExpert';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/worker' element={<AllExpert />} />
      </Routes>

    </Router>
  )
}

export default App
