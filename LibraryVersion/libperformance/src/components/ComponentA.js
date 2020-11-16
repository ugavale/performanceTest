import React, { useEffect, useState, useContext } from 'react';
import DisplayData from './DisplayData';
import { PerformanceContext } from '../App';

const ComponentA = () => {
	const [display, setDisplay] = useState(true);
	//console.log(initPerformanceObject);

	const performance = useContext(PerformanceContext);

	const { pageLoadTime, setApplicationName } = performance();

	setApplicationName('Display Data');

	const totalTime = async () => {
		await pageLoadTime(window?.performance);
	};

	useEffect(() => {
		//totalTime();
	}, []);

	return (
		<div>
			<h1>Hello</h1>
			<button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
				Show/Hide Data
			</button>
			{console.log(display)}
			{display ? <DisplayData /> : <h2>Press button to see data</h2>}
		</div>
	);
};

export default ComponentA;
