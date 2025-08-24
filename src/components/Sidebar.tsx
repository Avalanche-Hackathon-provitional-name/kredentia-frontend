
import './Sidebar.css';

import React from 'react';
import FirmarSidebar from './FirmarSidebar';

interface SidebarProps {
  setView?: (view: 'dashboard' | 'pendientes' | 'firmar') => void;
  view?: 'dashboard' | 'pendientes' | 'firmar';
  setSelectedDoc?: (doc: { name: string; tipo: string } | null) => void;
  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setView, view, setSelectedDoc, onLogout }) => {
  if (view === 'firmar') {
    return <FirmarSidebar onBack={() => { setView && setView('pendientes'); setSelectedDoc && setSelectedDoc(null); }} setSelectedDoc={setSelectedDoc} />;
  }
  return (
    <aside className="sidebar sidebar-section" style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }}>
      <nav className="sidebar-nav">
        <ul>
          <li className="sidebar-item" onClick={() => setView && setView('dashboard')}>Dashboard</li>
          <li className="sidebar-item">Docs</li>
          <li className="sidebar-item">User</li>
          <li className="sidebar-item">Config</li>
          <li className="sidebar-item">Plugins</li>
          <li className="sidebar-item" onClick={() => setView && setView('pendientes')}>Pending</li>
          <button
            className="sidebar-item sidebar-item-yellow sidebar-bottom-btn"
            onClick={onLogout}
          >
            Back
          </button>
        </ul>
      </nav>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 8, marginTop: 16 }}>
        {/* Bottom space */}
      </div>
    </aside>
  );
};

export default Sidebar;
