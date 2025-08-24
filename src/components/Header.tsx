const NOTIF_SOUND_URL = '/sounds/notification.mp3';
import './Header.css';
import './poppins-font.css';
import React, { useState, useRef, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi'

interface HeaderProps {
  setView?: (view: 'dashboard' | 'pendientes' | 'firmar') => void;
  setSelectedDoc?: (doc: { name: string; tipo: string } | null) => void;
}

const Header: React.FC<HeaderProps> = ({ setView, setSelectedDoc }) => {
  const { address, isConnected } = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [showModal, setShowModal] = useState(false)
  const [hasNotifications, setHasNotifications] = useState(true)
  const [showNotifMenu, setShowNotifMenu] = useState(false)

  
  //FECHA Y HORA EN LAS NOTIS SOLO BORRAR CUANDO LO TENGA EN BACKEND
  function getNow() {
    const d = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  const [notifications, setNotifications] = useState<Array<{ id: string; message: string; datetime: string }>>([
  ]);

  // Función para agregar notificación de prueba
  const addTestNotification = () => {
    setNotifications((prev) => [
      ...prev,
      {
        id: (Math.random() * 100000).toFixed(0),
        message: 'Tienes una nueva firma pendiente',
        datetime: getNow(),
      },
    ]);
    setHasNotifications(true);
  };

  // Listener para la tecla Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        addTestNotification();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Reproduce un sonido cuando llega una nueva notificación
  const playNotifSound = () => {
    const audio = new Audio(NOTIF_SOUND_URL);
    audio.play();
  };

  // Detecta si hay nuevas notificaciones y reproduce el sonido
  const prevNotifCount = useRef(notifications.length);
  useEffect(() => {
    if (notifications.length > prevNotifCount.current) {
      playNotifSound();
    }
    prevNotifCount.current = notifications.length;
  }, [notifications]);

  useEffect(() => {
    if (!address) return;
    async function fetchNotifications() {
      try {
        const res = await fetch(`https://tu-backend.com/api/notifications?user=${address}`);
        if (!res.ok) throw new Error('Error al obtener notificaciones');
        const data = await res.json();
        setNotifications(data.notifications || []);
        setHasNotifications((data.notifications || []).some((n: any) => !n.read));
      } catch (err) {
      }
    }
    fetchNotifications();
  }, [address]);

  const bellRef = useRef<HTMLSpanElement>(null)
  const notifMenuRef = useRef<HTMLDivElement>(null)
  const handleBellClick = () => {
    if (bellRef.current) {
      bellRef.current.classList.remove('shake');
      void bellRef.current.offsetWidth;
      bellRef.current.classList.add('shake');
    }
    setHasNotifications(false);
    setShowNotifMenu((prev) => !prev);
  };

  // Cerrar menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifMenuRef.current &&
        !notifMenuRef.current.contains(event.target as Node) &&
        bellRef.current &&
        !bellRef.current.contains(event.target as Node)
      ) {
        setShowNotifMenu(false);
      }
    };
    if (showNotifMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifMenu]);

  const handleConnectClick = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      {/* Al presionar la tecla = en el teclado, agregar notificación de prueba */}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
        <div className="header-left">
          <span className="header-logo">Kredentia</span>
        </div>
        <div className="header-right" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Icono de campana de notificaciones */}
          <span
            className={`header-bell`}
            style={{ marginRight: '20px', cursor: 'pointer', position: 'relative' }}
            ref={bellRef}
            onClick={handleBellClick}
            title="Notificaciones"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71L18 16z" fill="#FFD600"/>
            </svg>
            {hasNotifications && (
              <span className="bell-dot"></span>
            )}
            {showNotifMenu && (
              <div
                className={"notif-menu" + (showNotifMenu ? " notif-menu--open" : "")}
                ref={notifMenuRef}
              >
                <div className="notif-menu-title">Notificaciones</div>
                <ul
                  className={"notif-list" + (notifications.length > 3 ? " notif-list--scroll" : "")}
                >
                  {/* Aquí se renderizan las notificaciones recibidas del backend */}
                  {notifications.length === 0 ? (
                    <li className="notif-item notif-item--empty">No tienes notificaciones</li>
                  ) : (
                    notifications.map((notif) => (
                      <li
                        className={"notif-item" + (setView ? " notif-item--clickable" : "")}
                        key={notif.id}
                        onClick={() => {
                          if (setView) setView('firmar');
                          if (setSelectedDoc) setSelectedDoc({ name: 'Wallet 1', tipo: 'Certificado' });
                          setNotifications((prev) => prev.filter((n) => n.id !== notif.id));
                        }}
                      >
                        <div>{notif.message}</div>
                        <div className="notif-item-date">{notif.datetime}</div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </span>
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
