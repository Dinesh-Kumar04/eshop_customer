import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import Category from '../pages/Category';
import Cart from '../pages/Cart';
import PageNotFound from '../pages/PageNotFound';
import '../styles/MainRoutes.css'

const MainRoutes = () => {
  return (
    <div className='body-component'>
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default MainRoutes