import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.logo} alt="Logo" />
          <p>Hope You Enjoyed Our Food. We offer the best food in town with excellent customer service.</p>
          <div className="footer-social-icon">
            {/* GitHub Icon */}
            <a href="https://github.com/raghavc04" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.204.084 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.604-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.984-.399 3.004-.404 1.02.005 2.047.138 3.004.404 2.294-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.116 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.625-5.475 5.921.43.372.814 1.103.814 2.222 0 1.604-.015 2.895-.015 3.287 0 .32.192.693.798.575C20.565 21.797 24 17.303 24 12c0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/raghav-chhabra-629707213/" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>

            {/* Portfolio Icon (Custom SVG) */}
            <a href="https://raghavchhabraportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L1 9l11 7 9-5.59V18h2V9z"/>
              </svg>
            </a>

            {/* Facebook Icon */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>

            {/* Twitter Icon */}
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+9179*******2</li>
            <li>raghavc2002@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 All rights reserved || Designed by 
        <a href="https://github.com/raghavc04" target="_blank" rel="noopener noreferrer" className="footer-github-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.204.084 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.604-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.984-.399 3.004-.404 1.02.005 2.047.138 3.004.404 2.294-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.116 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.625-5.475 5.921.43.372.814 1.103.814 2.222 0 1.604-.015 2.895-.015 3.287 0 .32.192.693.798.575C20.565 21.797 24 17.303 24 12c0-6.628-5.373-12-12-12z"/>
          </svg>
          raghavc04
        </a>
      </p>
    </div>
  );
}

export default Footer;