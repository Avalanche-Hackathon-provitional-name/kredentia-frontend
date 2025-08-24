
import './Dashboard.css';
import React from 'react';


interface DashboardProps {
  setView?: (view: 'dashboard' | 'pendientes') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setView }) => (
  <main className="dashboard">
    <div className="dashboard-header">
      <span>Welcome</span>
    </div>
    <div className="dashboard-stats">
      <div className="dashboard-card">
        <div className="dashboard-number">150</div>
        <div>Signed docs</div>
      </div>
      <div className="dashboard-card" style={{ cursor: 'pointer' }} onClick={() => setView && setView('pendientes')}>
        <div className="dashboard-number">260</div>
        <div>Pending docs</div>
      </div>
    </div>
    <div className="dashboard-table">
      <div className="dashboard-table-title">Sender</div>
      <table>
        <thead>
          <tr>
            <th>Wallet</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0x123...abc</td><td>Admin</td></tr>
          <tr><td>0x456...def</td><td>User</td></tr>
          <tr><td>0x789...ghi</td><td>Validator</td></tr>
        </tbody>
      </table>
    </div>
  </main>
);

export default Dashboard;
