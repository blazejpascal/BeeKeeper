import React from 'react';

import Navbar from './components/Navbar/Navbar'
import './Header.scss'

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={require('../../assets/edited/Logo.png')} alt="Logo" className="header__logo" />
                <Navbar/>
            </div>

        </>
    );
};

export default Header;
