import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Navigate, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import RoomSessions from './components/RoomSessions';
import Seats from './components/Seats';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Tickets from './components/Tickets';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
  }
  
  function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
  }

  return (
    <>
      <BrowserRouter>
        {location.pathname !== '/login/' && location.pathname !== '/register/' && <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
        <Routes>
          <Route path='/' element='' />
          <Route path='/rooms/:id' element={<RoomSessions />} />
          <Route path='/seats/:id' element={<ProtectedRoute><Seats /></ProtectedRoute>} />
          <Route path='/tickets/' element={<ProtectedRoute><Tickets /></ProtectedRoute>} />
          <Route path='/login/' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/register/' element={<RegisterAndLogout setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/logout/' element={<Logout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
