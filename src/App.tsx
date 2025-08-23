// App.tsx

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Pendientes from './components/Pendientes';
import Firmar from './components/Firmar';
import './App.css';

import React from 'react';

function App() {
  const [view, setView] = React.useState<'dashboard' | 'pendientes' | 'firmar'>('dashboard');
  const [selectedDoc, setSelectedDoc] = React.useState<null | { name: string; tipo: string }>(null);

  return (
    <>
      <div className="navbar-section">
        {/* 🔹 Le paso setView al Header para que pueda navegar al hacer click en la notificación */}
        <Header setView={setView} />
      </div>

      <div className="main-layout">
        <div className="sidebar-section">
          <Sidebar setView={setView} view={view} setSelectedDoc={setSelectedDoc} />
        </div>

        <div className="body-section">
          {view === 'dashboard' && <Dashboard setView={setView} />}
          {view === 'pendientes' && <Pendientes setView={setView} />}
          {view === 'firmar' && selectedDoc && <Firmar selectedDoc={selectedDoc} />}
        </div>
      </div>
    </>
  );
}

export default App;
