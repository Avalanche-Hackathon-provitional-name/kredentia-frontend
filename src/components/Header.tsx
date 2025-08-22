// src/components/Header.tsx
import './Header.css';
import './poppins-font.css';
import React, { useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const Header: React.FC = () => {
  const { address, isConnected } = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [showModal, setShowModal] = useState(false)

  const handleConnectClick = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
        <div className="header-left">
          <span className="header-logo">Kredentia</span>
        </div>
        <div className="header-right">
          <div className="profile-info">
            {!isConnected ? (
              <button
                onClick={handleConnectClick}
                className="wallet-button"
              >
                Conectar Wallet
              </button>
            ) : (
              <>
                <span className="profile-name">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <button
                  onClick={() => disconnect()}
                  className="wallet-button"
                >
                  Desconectar
                </button>
              </>
            )}
            <span className="header-avatar">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#181818"/>
                <ellipse cx="18" cy="14.5" rx="6.5" ry="6.5" fill="#FFD600"/>
                <path d="M7 29c0-4.418 4.925-8 11-8s11 3.582 11 8" fill="#FFD600"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* Modal de conexión */}
      {showModal && (
        <div className="wallet-modal-overlay" onClick={handleCloseModal}>
          <div className="wallet-modal" onClick={(e) => e.stopPropagation()}>
            <div>
              <h2>Connect</h2>
              {connectors.map((connector) => (
                <button
                  key={connector.uid}
                  onClick={() => {
                    connect({ connector })
                    handleCloseModal()
                  }}
                  type="button"
                  className="wallet-button"
                >
                  {connector.name}
                </button>
              ))}
              <div>{status}</div>
              <div>{error?.message}</div>
            </div>
            <button className="wallet-close" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header
