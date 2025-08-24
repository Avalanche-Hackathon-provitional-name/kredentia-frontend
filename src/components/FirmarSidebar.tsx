import React from 'react';
import './FirmarSidebar.css';

const wallets = [
  { id: 1, name: 'Wallet 1', status: 'To sign', tipo: 'Certificate' },
  { id: 2, name: 'Wallet 2', status: 'To sign', tipo: 'Diploma' },
  { id: 3, name: 'Wallet 3', status: 'To sign', tipo: 'Record' },
  { id: 4, name: 'Wallet 4', status: 'To sign', tipo: 'Enrollment' },
  { id: 5, name: 'Wallet 5', status: 'To sign', tipo: 'Certificate' },
];

interface FirmarSidebarProps {
  onBack?: () => void;
  setSelectedDoc?: (doc: { name: string; tipo: string } | null) => void;
}



const FirmarSidebar: React.FC<FirmarSidebarProps> = ({ onBack, setSelectedDoc }) => {
  return (
    <aside className="sidebar firmar-sidebar sidebar-section">
      <button className="sidebar-back-btn" onClick={onBack}>&larr; Back</button>
      <h2 className="firmar-title">To Sign</h2>
      <ul className="firmar-wallet-list">
        {wallets.map(wallet => (
          <li key={wallet.id} className="firmar-wallet-item">
            <span>{wallet.name}</span>
            <span className="firmar-status">{wallet.status}</span>
            <button
              className="firmar-doc-btn"
              title={`View ${wallet.tipo}`}
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
