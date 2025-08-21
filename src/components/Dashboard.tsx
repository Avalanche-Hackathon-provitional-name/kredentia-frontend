
import './Dashboard.css';
import React from 'react';


interface DashboardProps {
  setView?: (view: 'dashboard' | 'pendientes') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setView }) => (
  <main className="dashboard">
    <div className="dashboard-header">
      <span>Hola</span>
    </div>
    <div className="dashboard-stats">
      <div className="dashboard-card">
        <div className="dashboard-number">150</div>
        <div>docs firmados</div>
      </div>
      <div className="dashboard-card" style={{ cursor: 'pointer' }} onClick={() => setView && setView('pendientes')}>
        <div className="dashboard-number">260</div>
        <div>docs pendientes</div>
      </div>
    </div>
    <div className="dashboard-table">
      <div className="dashboard-table-title">Remite</div>
      <table>
        <thead>
          <tr>
            <th>Wallet</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0x123...abc</td><td>Admin</td></tr>
          <tr><td>0x456...def</td><td>Usuario</td></tr>
          <tr><td>0x789...ghi</td><td>Validador</td></tr>
        </tbody>
      </table>
    </div>
  </main>
);

export default Dashboard;
