import React, { useEffect, useState, useContext } from 'react';
import DisplayData from './DisplayData';
import { PerformanceContext } from '../App';
import axios from 'axios';

const ComponentA = () => {
	const [display, setDisplay] = useState(true);
	const [posts, setPost] = useState([]);
	//console.log(initPerformanceObject);

	const performance = useContext(PerformanceContext);

	const { apiStart, apiStop, pageLoadTime, setApplicationName } = performance();

	setApplicationName('Display Data');

	// const totalTime = async () => {
	// 	await pageLoadTime(window?.performance);
	// };

	const pause = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
	};

	useEffect(() => {
		(async () => {
			await pause();
			apiStart('GetPosts');
			const posts = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
			);
			apiStop('GetPosts');
			setPost(posts.data);
			pageLoadTime();
		})();
	}, []);

	return (
		<div>
			<h1>Hello</h1>
			<button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
				Show/Hide Data
			</button>
			{console.log(display)}
			{display ? <DisplayData posts={posts}/> : <h2>Press button to see data</h2>}
		</div>
	);
};

export default ComponentA;
