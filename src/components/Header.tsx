
import './Header.css';
import './poppins-font.css';
import React from 'react';

const Header: React.FC = () => (
  <header className="header">
    <div className="header-left">
      <span className="header-logo">Kredentia</span>
    </div>
    <div className="header-right">
      <div className="profile-info">
            <span className="profile-name">0x123457689abcd</span>
        <span className="header-avatar">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#181818"/>
            <ellipse cx="18" cy="14.5" rx="6.5" ry="6.5" fill="#FFD600"/>
            <path d="M7 29c0-4.418 4.925-8 11-8s11 3.582 11 8" fill="#FFD600"/>
          </svg>
        </span>
      </div>
    </div>
  </header>
);

export default Header;
