import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Food Here</h2>
        <p>Choose from our best dishes, including a large variety of vegetarian, non-vegetarian, and Chinese cuisines. Order your food online and enjoy a delightful meal!</p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;