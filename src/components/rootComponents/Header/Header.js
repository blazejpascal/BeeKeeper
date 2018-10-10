import React from 'react';

import Navbar from './components/Navbar/Navbar'
import './Header.scss'

const Header = () => {
    return (
        <>
            <div className="header">
                <p>My header</p>
                <Navbar/>
            </div>

        </>
    );
};

export default Header;
