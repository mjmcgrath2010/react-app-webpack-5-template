import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from 'pages/home'

import './scss/App.scss'

function App() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
    </Routes>
  )
}

export default App
