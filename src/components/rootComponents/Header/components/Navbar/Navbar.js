import React from 'react'
import './Navbar.scss'
import {
  Link
} from 'react-router-dom';

const Navbar = () => (
    <div className="navbar">
        <ul className="navbar__list">
            <li  className="navbar__link navbar__link--active">
                <Link to="/">O nas </Link>
            </li>
            <li  className="navbar__link">
                <Link to="/beeCamera">Kamerka przy pasiece </Link>
            </li>
            <li className="navbar__link">
                <Link to="/contacts">Kontakt </Link>
            </li>
        </ul>
    </div>
)

export default Navbar
