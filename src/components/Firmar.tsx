import React, { useState } from 'react';
import './Firmar.css';

interface FirmarProps {
  selectedDoc: { name: string; tipo: string } | null;
}

const Firmar: React.FC<FirmarProps> = ({ selectedDoc }) => {
  const [showRechazo, setShowRechazo] = useState(false);
  const [motivo, setMotivo] = useState('');
  if (!selectedDoc) return null;
  return (
    <div className="firma-panel-panel">
      <h2 className="firma-panel-title">Documento Seleccionado</h2>
      {/* Imagen del documento */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 24,
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
          alt="Documento"
          style={{
            maxWidth: 120,
            maxHeight: 120,
            borderRadius: 12,
            boxShadow: '0 2px 12px #ffd60055',
            background: '#232323',
            padding: 8,
          }}
        />
      </div>
      <table className="firma-panel-table">
        <tbody>
          <tr>
            <th>Wallet</th>
            <td>{selectedDoc.name}</td>
          </tr>
          <tr>
            <th>Tipo</th>
            <td>{selectedDoc.tipo}</td>
          </tr>
        </tbody>
      </table>
      <div className="firma-panel-btn-row" style={{ display: 'flex', gap: 16 }}>
        <button
          className="firma-panel-btn"
          onClick={() => alert('Documento firmado correctamente')}
        >
          Firmar
        </button>
        <button
          className="firma-panel-btn firma-panel-btn-rechazar"
          style={{
            background: '#e53935',
            color: '#fff',
            fontWeight: 700,
            boxShadow: '0 2px 12px 0 #e5393555',
          }}
          onClick={() => setShowRechazo(!showRechazo)}
        >
          Rechazar
        </button>
      </div>
      {showRechazo && (
        <div style={{ marginTop: 18, width: '100%' }}>
          <textarea
            placeholder="Motivo del rechazo..."
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            style={{
              width: '100%',
              minHeight: 60,
              borderRadius: 8,
              border: '1.5px solid #e53935',
              padding: 10,
              fontSize: 16,
              marginBottom: 8,
              resize: 'vertical',
              background: '#232323',
              color: '#fff',
            }}
          />
          <div style={{ textAlign: 'right' }}>
            <button
              className="firma-panel-btn"
              style={{
                background: '#e53935',
                color: '#fff',
                fontWeight: 700,
                marginRight: 8,
              }}
              onClick={() => {
                alert('Documento rechazado: ' + motivo);
                setShowRechazo(false);
                setMotivo('');
              }}
            >
              Confirmar rechazo
            </button>
            <button
              className="firma-panel-btn"
              style={{ background: '#232323', color: '#FFD600', fontWeight: 700 }}
              onClick={() => setShowRechazo(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Firmar;
