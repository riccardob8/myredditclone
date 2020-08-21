import React from 'react';
import './Navbar.css';
import Logo from '../logo/Logo';
import Searchbar from '../searchbar/Searchbar';
import Actionsbar from '../actionsbar/Actionsbar';
export default function Navbar() {
    return <div className="navbar">
        <Logo/>
        <Searchbar/>
        <Actionsbar/>
    </div>
}