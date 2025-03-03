import React from 'react'
import { BrowserRouter, Routes, Navigate, Route, useLocation } from 'react-router-dom';

import Header from './components/Header'
import RoomSessions from './components/RoomSessions'
import Seats from './components/Seats'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'



function App() {
  return (
    <>
      <BrowserRouter>
        {location.pathname !== '/login/' && location.pathname !== '/register/' && <Header />}
        <Routes>
          <Route path='/' element='' />
          <Route path='/rooms/:id' element={<RoomSessions />} />
          <Route path='/seats/:id' element={<Seats />} />
          <Route path='/login/' element={<Login />} />
          <Route path='/register/' element={<Register />} />
          <Route path='*' element={<NotFound />}  />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
