import React from 'react';
import Menu from './styles/menu.png';
import { useState } from 'react';

function NavigationBar() {
    const [ canViewMenu, setCanViewMenu ] = useState(true);

    function viewMenu() {
        setCanViewMenu(true);
    }
 return (
    <nav className="nav-bar">
        <img className='menu-icon' onClick={viewMenu} src={Menu} alt='Menu Icon' />
        {canViewMenu && 
            <ul className = "nav-list">
            <li tabIndex={6} className="nav-list-item">
                <a href="#contactme">Contact me</a></li>
            <li tabIndex={5} className="nav-list-item">
                <a href="#projects">Projects</a>
            </li>
            <li tabIndex={4} className="nav-list-item">
                <a href="#experience">Experience</a>
            </li>
            <li tabIndex={3} className="nav-list-item">
                <a href="#skills">Skills</a></li>
            <li tabIndex={2} className="nav-list-item">
                <a href="#aboutme">My Intro</a></li>
            <li tabIndex={1} className="nav-list-item">
                <a href="#home">Home</a></li>
        </ul>
        }
    </nav>
 )
}

export default NavigationBar;