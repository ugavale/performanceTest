import React from 'react';
import { initPerformanceObject } from './components/PerfromanceLib';
import ComponentA from './components/ComponentA';

export const PerformanceContext = React.createContext();

function App() {
	return (
		<PerformanceContext.Provider value={initPerformanceObject}>
			<div className='App'>
				<h1>Lib Performance</h1>
				<ComponentA />
			</div>
		</PerformanceContext.Provider>
	);
}

export default App;
