import './Header.css';
import './poppins-font.css';
import React, { useState, useEffect, useRef } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import nofi from '../assets/notifi.mp3';
interface HeaderProps {
  setView?: (
    view: 'dashboard' | 'pendientes' | 'firmar',
    doc?: { name: string; tipo: string }
  ) => void;
}

const Header: React.FC<HeaderProps> = ({ setView }) => {
  const { address, isConnected } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const [showModal, setShowModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<{ tipo: string; name: string }[]>([]);
  const [hasNewNotification, setHasNewNotification] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleConnectClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setHasNewNotification(false);
  };

  // 🔔 Simulación de llegada de notificaciones
useEffect(() => {
  let count = 0;

  const interval = setInterval(() => {
    if (count < 3) { 
      const newNotif = { tipo: 'Certificado', name: address || '0xUsuario' };
      setNotifications((prev) => [newNotif, ...prev]);
      setHasNewNotification(true);
      count++;

      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    } else {
      clearInterval(interval);
    }
  }, 15000);

  return () => clearInterval(interval);
}, [address]);


  // 🔗 Al hacer clic en una notificación
  const handleNotificationClick = (notif: { tipo: string; name: string }) => {
    setView && setView('firmar', notif); // 👉 Mandamos el doc seleccionado a Firmar
    setShowNotifications(false);
  };

  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div className="header-left">
          <span className="header-logo">Kredentia</span>
        </div>

        <div className="header-right">
          {/* 🔔 Botón de notificaciones */}
            <div className="notification-wrapper">
              <button
                className="notification-button"
                onClick={toggleNotifications}
              >
                🔔
                {hasNewNotification && <span className="notification-dot" />}
              </button>

              {/* Popup de notificaciones */}
              {showNotifications && (
                <div className="notification-popup">
                  {notifications.length > 0 ? (
                    notifications.map((notif, idx) => (
                      <div
                        key={idx}
                        className="notification-item"
                        onClick={() => handleNotificationClick(notif)}
                      >
                        📄 {notif.tipo} - {notif.name}
                      </div>
                    ))
                  ) : (
                    <div className="notification-empty">
                      No hay notificaciones
                    </div>
                  )}
                </div>
              )}
            </div>
          <div className="profile-info">
            {!isConnected ? (
              <button onClick={handleConnectClick} className="wallet-button">
                Conectar Wallet
              </button>
            ) : (
              <>
                <span className="profile-name">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                
                <button onClick={() => disconnect()} className="wallet-button">
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
                    connect({ connector });
                    handleCloseModal();
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
            <button className="wallet-close" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* 🎵 Sonido de notificación */}
      <audio ref={audioRef} src={nofi} preload="auto" />
    </>
  );
};

export default Header;
