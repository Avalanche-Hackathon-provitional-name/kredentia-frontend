import React, { useState, useRef } from "react";
import "./App.css";

const ADMIN_WALLET = "0xADMIN123";
const tabs = [
  { label: "Pestaña 1", buttons: ["Botón 1", "Botón 2", "Botón 3"] },
  { label: "Pestaña 2", buttons: ["Botón A", "Botón B"] },
  { label: "Pestaña 3", buttons: ["Botón X", "Botón Y", "Botón Z"] },
];

export default function App() {
  const [wallet, setWallet] = useState("");
  const [walletSubmitted, setWalletSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [certData, setCertData] = useState({
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    edad: "",
    sexo: "",
    estadoCivil: "",
    documento: "",
    direccion: "",
    telefono: "",
    email: "",
    contactoEmergenciaNombre: "",
    contactoEmergenciaParentesco: "",
    contactoEmergenciaTelefono: ""
  });
  const [certSubmitted, setCertSubmitted] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Handler para el formulario de wallet
  const handleWalletSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWalletSubmitted(true);
  };

  // Handler para el formulario de certificado
  const handleCertChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCertData({ ...certData, [e.target.name]: e.target.value });
    setFormTouched(true);
  };
  const handleCertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCertSubmitted(true);
  };

  // Si no se ha ingresado wallet, mostrar formulario de wallet
  if (!walletSubmitted) {
    return (
      <div className="app-container">
        <div className="box">
          <h2>Documento de Salud</h2>
          <form onSubmit={handleWalletSubmit} className="form-wallet">
            <input
              type="text"
              placeholder="Wallet address"
              value={wallet}
              onChange={e => setWallet(e.target.value)}
              className="input-wallet"
              required
            />
            <button type="submit" className="main-btn">Ingresar</button>
          </form>
        </div>
      </div>
    );
  }

  // Si es admin, mostrar box principal
  if (wallet === ADMIN_WALLET) {
    return (
      <div className="app-container">
        <div className="box">
          <div className="tabs">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`tab-btn${idx === activeTab ? " active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="buttons">
            {tabs[activeTab].buttons.map((btn) => (
              <button key={btn} className="main-btn">
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Si no es admin, mostrar formulario de datos de salud
  const handleBack = () => {
    if (formTouched && !certSubmitted) {
      if (window.confirm("¿Seguro que quieres salir sin guardar los cambios? Se perderán los datos ingresados.")) {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="app-container">
      <div className="box">
        {/* Botón de retroceso con icono SVG */}
        <button className="back-btn" onClick={handleBack} title="Volver">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 19L8.5 12L15.5 5" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2>Documento Personal</h2>
        {certSubmitted ? (
          <div className="cert-success">
            <p>¡Documento generado para {certData.nombres}!</p>
          </div>
        ) : (
          <form onSubmit={handleCertSubmit} className="form-cert" ref={formRef} autoComplete="off">
            <input
              type="text"
              name="nombres"
              placeholder="Nombres"
              value={certData.nombres}
              onChange={handleCertChange}
              className="input-cert"
              required
            />
            <input
              type="text"
              name="apellidoPaterno"
              placeholder="Apellido Paterno"
              value={certData.apellidoPaterno}
              onChange={handleCertChange}
              className="input-cert"
              required
            />
            <input
              type="text"
              name="apellidoMaterno"
              placeholder="Apellido Materno"
              value={certData.apellidoMaterno}
              onChange={handleCertChange}
              className="input-cert"
              required
            />
            <label className="label-cert">Fecha de nacimiento</label>
            <input
              type="date"
              name="fechaNacimiento"
              value={certData.fechaNacimiento}
              onChange={handleCertChange}
              className="input-cert"
              required
            />
            <input
              type="number"
              name="edad"
              placeholder="Edad"
              min="1"
              max="150"
              value={certData.edad}
              onChange={handleCertChange}
              className="input-cert"
              required
            />
            <label className="label-cert">Sexo</label>
            <select
              name="sexo"
              value={certData.sexo}
              onChange={handleCertChange}
              className="input-cert"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="No decirlo">No decirlo</option>
            </select>
            <label className="label-cert">Estado civil</label>
            <select
              name="estadoCivil"
              value={certData.estadoCivil}
              onChange={handleCertChange}
              className="input-cert"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Soltero(a)">Soltero(a)</option>
              <option value="Casado(a)">Casado(a)</option>
              <option value="Divorciado(a)">Divorciado(a)</option>
              <option value="Viudo(a)">Viudo(a)</option>
              <option value="Separado(a) legalmente">Separado(a) legalmente</option>
              <option value="Unión libre / conviviente">Unión libre / conviviente</option>
            </select>
            <input
              type="text"
              name="documento"
              placeholder="Número de documento de identidad"
              value={certData.documento}
              onChange={e => {
                // Solo permitir números
                if (/^\d*$/.test(e.target.value)) {
                  handleCertChange(e);
                }
              }}
              className="input-cert"
              required
              maxLength={20}
            />
            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              value={certData.direccion}
              onChange={handleCertChange}
              className="input-cert"
              required
            />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono de contacto"
              value={certData.telefono}
              onChange={e => {
                // Solo permitir números
                if (/^\d*$/.test(e.target.value)) {
                  handleCertChange(e);
                }
              }}
              className="input-cert"
              required
              maxLength={15}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={certData.email}
              onChange={handleCertChange}
              className="input-cert"
              required
            />
            <h3 className="subtitle-cert">Datos extra</h3>
            <label className="label-cert">Persona de contacto en caso de emergencia</label>
            <input
              type="text"
              name="contactoEmergenciaNombre"
              placeholder="Nombre de contacto de emergencia"
              value={certData.contactoEmergenciaNombre}
              onChange={handleCertChange}
              className="input-cert"
              required
            />
            <input
              type="text"
              name="contactoEmergenciaParentesco"
              placeholder="Parentesco"
              value={certData.contactoEmergenciaParentesco}
              onChange={handleCertChange}
              className="input-cert"
              required
            />
            <input
              type="text"
              name="contactoEmergenciaTelefono"
              placeholder="Teléfono de contacto de emergencia"
              value={certData.contactoEmergenciaTelefono}
              onChange={e => {
                // Solo permitir números
                if (/^\d*$/.test(e.target.value)) {
                  handleCertChange(e);
                }
              }}
              className="input-cert"
              required
              maxLength={15}
            />
            <button type="submit" className="main-btn">Generar Documento</button>
          </form>
        )}
      </div>
    </div>
  );
}