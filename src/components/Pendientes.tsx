import './Pendientes.css';

const pendientesData = [
  { tipo: 'Certificado', cantidad: 3 },
  { tipo: 'Diploma', cantidad: 5 },
  { tipo: 'Record', cantidad: 2 },
  { tipo: 'Matricula', cantidad: 4 },
];

const Pendientes: React.FC = () => (
  <main className="dashboard">
    <div className="pendientes-container">
      <div className="pendientes-boxes">
        {pendientesData.map(({ tipo, cantidad }) => (
          <div className="pendiente-box" key={tipo}>
            <div className="pendiente-cantidad">{cantidad}</div>
            <div className="pendiente-tipo">{tipo}</div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Pendientes;