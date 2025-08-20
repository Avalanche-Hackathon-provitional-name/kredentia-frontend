import React from 'react';

const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <div className="sidebar-logo">Kredentia</div>
    <nav className="sidebar-nav">
      <ul>
        <li>Dashboard</li>
        <li>Docs</li>
        <li>Usuarios</li>
        <li>Config</li>
        <li>Plugins</li>
        <li className="pendientes">Pendientes</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
