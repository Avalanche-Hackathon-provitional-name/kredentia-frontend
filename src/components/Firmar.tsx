
interface FirmarProps {
  selectedDoc: { name: string; tipo: string } | null;
}


import React, { useState } from 'react';

const Firmar: React.FC<FirmarProps> = ({ selectedDoc }) => {
  const [showReject, setShowReject] = useState(false);
  const [reason, setReason] = useState('');
  if (!selectedDoc) return null;
  return (
    <div className="firma-panel-panel">
      <h2 className="firma-panel-title">Selected Document</h2>
      {/* Document image */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
          alt="Document"
          style={{ maxWidth: 120, maxHeight: 120, borderRadius: 12, boxShadow: '0 2px 12px #ffd60055', background: '#232323', padding: 8 }}
        />
      </div>
      <table className="firma-panel-table">
        <tbody>
          <tr>
            <th>Wallet</th>
            <td>{selectedDoc.name}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{selectedDoc.tipo}</td>
          </tr>
        </tbody>
      </table>
      <div className="firma-panel-btn-row" style={{ display: 'flex', gap: 16 }}>
        <button
          className="firma-panel-btn"
          onClick={() => alert('Document signed successfully')}
        >
          Sign
        </button>
        <button
          className="firma-panel-btn firma-panel-btn-reject"
          style={{ background: '#e53935', color: '#fff', fontWeight: 700, boxShadow: '0 2px 12px 0 #e5393555' }}
          onClick={() => setShowReject(!showReject)}
        >
          Reject
        </button>
      </div>
      {showReject && (
        <div style={{ marginTop: 18, width: '100%' }}>
          <textarea
            placeholder="Reason for rejection..."
            value={reason}
            onChange={e => setReason(e.target.value)}
            style={{ width: '100%', minHeight: 60, borderRadius: 8, border: '1.5px solid #e53935', padding: 10, fontSize: 16, marginBottom: 8, resize: 'vertical', background: '#232323', color: '#fff' }}
          />
          <div style={{ textAlign: 'right' }}>
            <button
              className="firma-panel-btn"
              style={{ background: '#e53935', color: '#fff', fontWeight: 700, marginRight: 8 }}
              onClick={() => { alert('Document rejected: ' + reason); setShowReject(false); setReason(''); }}
            >
              Confirm rejection
            </button>
            <button
              className="firma-panel-btn"
              style={{ background: '#232323', color: '#FFD600', fontWeight: 700 }}
              onClick={() => setShowReject(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Firmar;
import './Firmar.css';
