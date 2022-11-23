import React, { useState, useEffect } from "react";

function IntervalHookContainer() {
	const [count, setCount] = useState(0);

	const tick = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		const interval = setInterval(tick, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [count]);
	return <h2>{count}</h2>;
}

export default IntervalHookContainer;
