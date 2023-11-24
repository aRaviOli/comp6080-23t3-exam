import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1400);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1400);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="navbar">
            <Link to="/dashboard" className="navbar-item">{isMobile ? 'Da' : 'Dashboard'}</Link>
            <Link to="/game/math" className="navbar-item">{isMobile ? 'Ma' : 'Math'}</Link>
            <div className="navbar-item logo-container" >
                <img src="LEGO_logo.png" alt="Logo"/>
            </div>
            <Link to="/game/connect" className="navbar-item">{isMobile ? 'Co' : 'Connect 4'}</Link>
            <Link to="/game/memory" className="navbar-item">{isMobile ? 'Me' : 'Memorisation'}</Link>
        </div>
    );
}

export default Navbar;
