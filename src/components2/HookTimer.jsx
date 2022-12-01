import React, { useEffect, useState, useRef } from "react";

function HookTimer() {
	const [timer, setTimer] = useState(0);
	const intervalRef = useRef();
	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<div>
			Hook - {timer}
			<button onClick={() => clearInterval(intervalRef.current)}>
				Clear Hook timer
			</button>
		</div>
	);
}

export default HookTimer;
