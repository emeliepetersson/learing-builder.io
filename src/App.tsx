import React from 'react';
import './App.css';
import builder from '@builder.io/react';
import CatchAllRoute from './CatchAllRoute';
import './components/shared';

// Put your API key here
builder.init('06a15aac5fc546e7b779f28f2af1b7f4');

const App: React.FC = () => {
	return (
		<div className="App">
			<CatchAllRoute />
		</div>
	);
};

export default App;
