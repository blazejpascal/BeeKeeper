import React from 'react';

import Navbar from './components/Navbar/Navbar'
import './Header.scss'

const Header = () => {
    return (
        <>
            <div className="header">
                <span className="header__logo">logo</span>
                <Navbar/>
            </div>

        </>
    );
};

export default Header;
