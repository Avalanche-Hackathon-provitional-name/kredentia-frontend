


import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Pendientes from './components/Pendientes';
import Firmar from './components/Firmar';
import WalletLogin from './components/WalletLogin';
import './App.css';

import React, { useState, useCallback } from 'react';


const ADMIN_WALLETS = ['0xADMIN123'];


function App() {
		const [view, setView] = React.useState<'dashboard' | 'pendientes' | 'firmar'>('dashboard');
		const [selectedDoc, setSelectedDoc] = React.useState<null | { name: string; tipo: string }>(null);
		const [address, setAddress] = React.useState<string | null>(null);

		if (!address) {
			return <WalletLogin onSuccess={setAddress} />;
		}

			if (!ADMIN_WALLETS.includes(address)) {
				return null;
			}

		return (
			<>
				<div className="navbar-section">
					<Header />
				</div>
				<div className="main-layout">
					<div className="sidebar-section">
						   <Sidebar setView={setView} view={view} setSelectedDoc={setSelectedDoc} onLogout={() => setAddress(null)} />
					</div>
					<div className="body-section">
						{view === 'dashboard' && <Dashboard setView={setView} />}
						{view === 'pendientes' && <Pendientes setView={setView} />}
						{view === 'firmar' && selectedDoc && <Firmar selectedDoc={selectedDoc} />}
					</div>
				</div>
			</>
		);
	}

export default App;