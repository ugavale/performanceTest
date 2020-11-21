import React, { useEffect} from 'react';

const DsiplayData = ({posts}) => {
	
	useEffect(() => {
		//getPosts();
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
				{posts.map((post) => (
					<li key={post.id}>{post.title} </li>
				))}
			</ul>
		</div>
	);
};

export default DsiplayData;
