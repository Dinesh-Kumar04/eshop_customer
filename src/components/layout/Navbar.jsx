import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-primary py-sm-3">
        <div className="container-fluid">
          <h2 className='mb-0 text-white'>ESHOP</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-sm-0 nav-ul-custom">
              <li className="nav-item">
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/category'}>Category</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/login'}>Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/register'}>Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/cart'}>Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/profile'}>Profile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar