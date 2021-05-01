import React from 'react';
import Search from '../Widgets/Search.jsx';
import Icon from '../Widgets/Icon.jsx';
import Company from '../Widgets/Company.jsx';
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-main">
      <Icon className='navbar-main-logo' />
      <Company className='navbar-main-name' />
      <Search type='text' placeholder='Search' className="navbar-main"/>
      <FaShoppingCart size={40}/>
    </div>
  </nav>
)

export default Navbar;