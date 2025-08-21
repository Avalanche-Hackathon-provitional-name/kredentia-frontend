import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';


function App() {
	return (
		<div className="app-vertical-layout">
			<Header />
			<div className="app-layout">
				<Sidebar />
				<div className="main-content">
					<Dashboard />
				</div>
			</div>
		</div>
	);
}

export default App;