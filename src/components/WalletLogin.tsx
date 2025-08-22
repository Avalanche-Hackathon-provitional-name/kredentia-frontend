import React from 'react';

import './WalletLogin.css';

const ADMIN_WALLETS = ['0xADMIN123'];

const WalletLogin: React.FC<{ onSuccess: (address: string) => void }> = ({ onSuccess }) => {
  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ADMIN_WALLETS.includes(input.trim())) {
      setError('');
      onSuccess(input.trim());
    } else {
      setError('Proximamente');
    }
  };

  return (
    <div className="wallet-login-bg">
      <form className="wallet-login-panel" onSubmit={handleSubmit}>
        <h2 className="wallet-login-title">Ingresa una wallet</h2>
        <input
          className="wallet-login-input"
          type="text"
          placeholder="Ingresa tu wallet..."
          value={input}
          onChange={e => setInput(e.target.value)}
          autoFocus
        />
        {error && <div className="wallet-login-error">{error}</div>}
        <button className="wallet-login-btn" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default WalletLogin;
