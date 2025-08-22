
interface FirmarProps {
  selectedDoc: { name: string; tipo: string } | null;
}

const Firmar: React.FC<FirmarProps> = ({ selectedDoc }) => {
  if (!selectedDoc) return null;
  return (
    <main className="firmar-dashboard-main">
      <div className="firmar-dashboard-panel">
        <h2 className="firmar-dashboard-title">Documento Seleccionado</h2>
        <table className="firmar-dashboard-table">
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
        <div className="firmar-dashboard-btn-row">
          <button
            className="firmar-btn"
            onClick={() => alert('Documento firmado correctamente')}
          >
            Firmar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Firmar;
