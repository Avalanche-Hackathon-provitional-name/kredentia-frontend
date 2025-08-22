import React, { useState } from 'react';
import './FirmarSidebar.css';

const wallets = [
  { id: 1, name: 'Wallet 1', status: 'Por firmar', tipo: 'Certificado' },
  { id: 2, name: 'Wallet 2', status: 'Por firmar', tipo: 'Diploma' },
  { id: 3, name: 'Wallet 3', status: 'Por firmar', tipo: 'Record' },
  { id: 4, name: 'Wallet 4', status: 'Por firmar', tipo: 'Matricula' },
  { id: 5, name: 'Wallet 5', status: 'Por firmar', tipo: 'Certificado' },
];

interface FirmarSidebarProps {
  onBack?: () => void;
  setSelectedDoc?: (doc: { name: string; tipo: string } | null) => void;
}



const FirmarSidebar: React.FC<FirmarSidebarProps> = ({ onBack, setSelectedDoc }) => {
  return (
    <aside className="sidebar firmar-sidebar sidebar-section">
      <button className="sidebar-back-btn" onClick={onBack}>&larr; Atrás</button>
      <h2 className="firmar-title">Por Firmar</h2>
      <ul className="firmar-wallet-list">
        {wallets.map(wallet => (
          <li key={wallet.id} className="firmar-wallet-item">
            <span>{wallet.name}</span>
            <span className="firmar-status">{wallet.status}</span>
            <button
              className="firmar-doc-btn"
              title={`Ver ${wallet.tipo}`}
              onClick={() => setSelectedDoc && setSelectedDoc({ name: wallet.name, tipo: wallet.tipo })}
            >
              {'>'}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FirmarSidebar;
