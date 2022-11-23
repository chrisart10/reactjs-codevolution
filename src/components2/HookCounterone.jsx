import React, { useState, useEffect } from "react";
function HookCounterOne() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	const incrementCount = () => setCount(count + 1);
	useEffect(() => {
		document.title = `You clicked ${count} times`;
		console.log("Updating document title");
	}, [count]);
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={incrementCount}>Click {count} times</button>
		</div>
	);
}

export default HookCounterOne;
