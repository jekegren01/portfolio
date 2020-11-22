import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <nav>
            <h1 className="pageHeader">Jacob Ekegren</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact-me">Contact</Link>
            </div>
        </nav>
    )
}

export default Header;