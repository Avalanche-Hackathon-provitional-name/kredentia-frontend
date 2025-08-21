
import './Sidebar.css';
import React from 'react';

const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <nav className="sidebar-nav">
      <ul>
  <li className="sidebar-item">Dashboard</li>
  <li className="sidebar-item">Docs</li>
  <li className="sidebar-item">Usuarios</li>
  <li className="sidebar-item">Config</li>
  <li className="sidebar-item">Plugins</li>
  <li className="sidebar-item">Pendientes</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
