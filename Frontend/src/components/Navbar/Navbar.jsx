import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { cartItems, getTotalCartAmount, token, setToken } = useContext(StoreContext); // Access cart items from context
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/'); // Redirect to home page after logout
  };

  // Check if cart has items
  const cartHasItems = Object.values(cartItems).some(quantity => quantity > 0);

  return (
    <div className='navbar'>
      <Link to='/' ><img src={assets.logo} alt="Logo" className="logo" /></Link>
      
      <ul className="navbar-menu">
        <li><Link to='/' className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</Link></li>
        <li><a href='#explore-menu' className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a></li>
        <li><a href='#app-download' className={menu === "Mobile-app" ? "active" : ""} onClick={() => setMenu("Mobile-app")}>Mobile-App</a></li>
        <li><a href='#footer' className={menu === "Contact us" ? "active" : ""} onClick={() => setMenu("Contact us")}>Contact Us</a></li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />
        <div className="navbar-search-icon">
          <Link to='/cart' onClick={() => setMenu("")}><img src={assets.basket_icon} alt="Cart" /></Link>
          {cartHasItems && <div className="dot"></div>} {/* Show dot only if cart has items */}
        </div>
        {!token ? (
          <button className="sign-up-btn" onClick={() => setShowLogin(true)}>Sign Up</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="Orders Icon" /> Orders</li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="Logout Icon" /> Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;