import React from 'react';

const Header: React.FC = () => (
  <header className="header">
    <div className="header-left"></div>
    <div className="header-center"></div>
    <div className="header-right">
      <span>Ok... Nombre</span>
      <span className="header-avatar">👤</span>
    </div>
  </header>
);

export default Header;
