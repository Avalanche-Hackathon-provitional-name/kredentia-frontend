import React, { useState } from 'react';
import './Pendientes.css';
const pendingData = [
  { type: 'Certificate', amount: 3 },
  { type: 'Diploma', amount: 5 },
  { type: 'Record', amount: 2 },
  { type: 'Enrollment', amount: 4 },
];


interface PendingProps {
  setView?: (view: 'dashboard' | 'pendientes' | 'firmar') => void;
}

const Pending: React.FC<PendingProps> = ({ setView }) => {
  const [certificateSigned, setCertificateSigned] = useState(false);

  const handleCertificateClick = () => {
    if (!certificateSigned) {
      setCertificateSigned(true);
      setTimeout(() => {
        setView && setView('firmar');
      }, 400);
    }
  };

  return (
    <main className="dashboard">
      <div className="pendientes-container">
        <div className="pendientes-boxes">
          {pendingData.map(({ type, amount }) => (
            <div
              className="pendiente-box"
              key={type}
              onClick={type === 'Certificate' ? handleCertificateClick : undefined}
              style={type === 'Certificate' ? { cursor: 'pointer', border: '2px solid #4f8cff' } : {}}
            >
              <div className="pendiente-cantidad">{amount}</div>
              <div className="pendiente-tipo">{type}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Pending;