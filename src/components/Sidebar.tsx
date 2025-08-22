
import './Sidebar.css';
import React from 'react';
import FirmarSidebar from './FirmarSidebar';

interface SidebarProps {
  setView?: (view: 'dashboard' | 'pendientes' | 'firmar') => void;
  view?: 'dashboard' | 'pendientes' | 'firmar';
  setSelectedDoc?: (doc: { name: string; tipo: string } | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setView, view, setSelectedDoc }) => {
  if (view === 'firmar') {
    return <FirmarSidebar onBack={() => { setView && setView('pendientes'); setSelectedDoc && setSelectedDoc(null); }} setSelectedDoc={setSelectedDoc} />;
  }
  return (
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
};

export default Sidebar;
