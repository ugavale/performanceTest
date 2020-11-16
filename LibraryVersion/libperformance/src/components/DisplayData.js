import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PerformanceContext } from '../App';

const DsiplayData = () => {
	const [post, setPost] = useState([]);

	const performance = useContext(PerformanceContext);

	const { apiStart, apiStop, pageLoadTime } = performance();

	const pause = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
	};

	const getPosts = async () => {
		await pause();
		apiStart('GetPosts');
		const post = await axios.get('https://jsonplaceholder.typicode.com/posts');
		apiStop('GetPosts');
		setPost(post.data);
	};

	const loadTime = async () => {
		pageLoadTime(window?.performance);
	};

	useEffect(() => {
		//getPosts();

		(async () => {
			await pause();
			apiStart('GetPosts');
			const post = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
			);
			apiStop('GetPosts');
			setPost(post.data);
			loadTime();
		})();
		// pause();
		// apiStart('GetPosts');
		// axios
		// 	.get('https://jsonplaceholder.typicode.com/posts')
		// 	.then((res) => {
		// 		pause();
		// 		console.log(res);
		// 		setPost(res.data);
		// 		apiStop('GetPosts');
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	}, []);

	return (
		<div>
			<ul>
				{post.map((post) => (
					<li key={post.id}>{post.title} </li>
				))}
			</ul>
		</div>
	);
};

export default DsiplayData;
