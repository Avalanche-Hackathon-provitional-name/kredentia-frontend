import React from 'react';

const Dashboard: React.FC = () => (
  <main className="dashboard">
    <div className="dashboard-header">
      <span>Hola</span>
      <button className="dashboard-close">X</button>
    </div>
    <div className="dashboard-stats">
      <div className="dashboard-card">
        <div className="dashboard-number">150</div>
        <div>docs firmados</div>
      </div>
      <div className="dashboard-card">
        <div className="dashboard-number">260</div>
        <div>docs pendientes</div>
      </div>
    </div>
    <div className="dashboard-table">
      <div className="dashboard-table-title">Remite</div>
      <table>
        <thead>
          <tr>
            <th>Doc</th>
            <th>Firma</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Juan</td><td>Firmado</td></tr>
          <tr><td>02</td><td>Ana</td><td>Pendiente</td></tr>
          <tr><td>03</td><td>Pedro</td><td>Pendiente</td></tr>
        </tbody>
      </table>
    </div>
  </main>
);

export default Dashboard;
