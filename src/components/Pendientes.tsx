import React, { useState } from 'react';
import './Pendientes.css';
const pendientesData = [
  { tipo: 'Certificado', cantidad: 3 },
  { tipo: 'Diploma', cantidad: 5 },
  { tipo: 'Record', cantidad: 2 },
  { tipo: 'Matricula', cantidad: 4 },
];


interface PendientesProps {
  setView?: (view: 'dashboard' | 'pendientes' | 'firmar') => void;
}

const Pendientes: React.FC<PendientesProps> = ({ setView }) => {
  const [certificadoFirmado, setCertificadoFirmado] = useState(false);

  const handleCertificadoClick = () => {
    if (!certificadoFirmado) {
      setCertificadoFirmado(true);
      setTimeout(() => {
        setView && setView('firmar');
      }, 400);
    }
  };

  return (
    <main className="dashboard">
      <div className="pendientes-container">
        <div className="pendientes-boxes">
          {pendientesData.map(({ tipo, cantidad }) => (
            <div
              className="pendiente-box"
              key={tipo}
              onClick={tipo === 'Certificado' ? handleCertificadoClick : undefined}
              style={tipo === 'Certificado' ? { cursor: 'pointer', border: '2px solid #4f8cff' } : {}}
            >
              <div className="pendiente-cantidad">{cantidad}</div>
              <div className="pendiente-tipo">{tipo}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Pendientes;