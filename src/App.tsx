import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Pendientes from './components/Pendientes';
import './App.css';

import React, { useState } from 'react';

function App() {
	const [view, setView] = useState<'dashboard' | 'pendientes'>('dashboard');

	return (
		<div className="app-vertical-layout">
			<Header />
			<div className="app-layout">
				<Sidebar setView={setView} />
				<div className="main-content">
					{view === 'pendientes' ? <Pendientes /> : <Dashboard setView={setView} />}
				</div>
			</div>
		</div>
	);
}

export default App;