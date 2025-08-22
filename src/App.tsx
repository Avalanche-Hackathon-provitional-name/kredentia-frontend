

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Pendientes from './components/Pendientes';
import Firmar from './components/Firmar';
import './App.css';

import React, { useState } from 'react';



function App() {
	const [view, setView] = useState<'dashboard' | 'pendientes' | 'firmar'>('dashboard');
	const [selectedDoc, setSelectedDoc] = useState<null | { name: string; tipo: string }>(null);

				return (
					<div className="app-vertical-layout">
						<Header />
						<div className="app-layout">
													<Sidebar setView={setView} view={view} setSelectedDoc={setSelectedDoc} />
													<div className="main-content">
														{view === 'pendientes' ? (
															<Pendientes setView={setView} />
														) : (
															selectedDoc ? <Firmar selectedDoc={selectedDoc} /> : null
														)}
													</div>
						</div>
					</div>
				);
}

export default App;