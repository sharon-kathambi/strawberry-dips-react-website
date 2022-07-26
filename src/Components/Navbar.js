import React, { useState } from 'react';
//import { ReactDOM } from 'react-dom';
import { Link } from 'react-router-dom';


function Navbar() {

const [click, setClick] = useState(false);

function handleClick () {
    setClick(!click)
}

function closeMobileMenu() {
    setClick(false)
}


  return (
    <>
     <nav className='navbar'>
    <div className='navbar-container'>
       <Link to="/" className='navbar-logo'>
        Strawberry Dips  <i className='fab fa-typo3' />
        </Link> 
        <div className='menu-icon' onClick={handleClick}> 
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div> 
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/aboutus" className='nav-links' onClick={closeMobileMenu}>
                    About Us
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/orderonline" className='nav-links-mobile' onClick={closeMobileMenu}>
                    Order Online
                </Link>
            </li>
        </ul>

    </div>    
    </nav> 
    </>
  )
}

export default Navbar
