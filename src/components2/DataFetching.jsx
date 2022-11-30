import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetching() {
	const [post, setPost] = useState([]);
	const [id, setId] = useState(1);
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => {
				console.log(res);
				setPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [idFromButtonClick]);
	const handleclick = () => {
		setIdFromButtonClick(id);
	};
	return (
		<div>
			<input
				type="text"
				value={id}
				onChange={(e) => setId(e.target.value)}
			/>
			<button type="button" onClick={handleclick}>
				Fetch Post
			</button>
			<div>{post.title}</div>
			{/* <ul>
				{post.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	);
}

export default DataFetching;
