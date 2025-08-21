
import './Sidebar.css';
import React from 'react';


interface SidebarProps {
  setView?: (view: 'dashboard' | 'pendientes') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setView }) => (
  <aside className="sidebar">
    <nav className="sidebar-nav">
      <ul>
        <li className="sidebar-item" onClick={() => setView && setView('dashboard')}>Dashboard</li>
        <li className="sidebar-item">Docs</li>
        <li className="sidebar-item">Usuarios</li>
        <li className="sidebar-item">Config</li>
        <li className="sidebar-item">Plugins</li>
        <li className="sidebar-item" onClick={() => setView && setView('pendientes')}>Pendientes</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
