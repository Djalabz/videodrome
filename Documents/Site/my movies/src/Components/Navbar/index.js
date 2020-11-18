import SearchBar from '../SearchBar';
import React from 'react';
import './index.css';



const Navbar=() => {
  return (
    <div className='nav'>
        <div className="logo">
            <p>videodrome</p>
        </div>
        <SearchBar />
        <nav className="navigation">
          <ul>
            <li exact to='/about'>About</li>
            <li exact to='/login'>Login</li>
            <li exact to='/signup'><button>SIGN UP</button></li>
          </ul>      
        </nav>
        
    </div>
  )
};


export default Navbar;