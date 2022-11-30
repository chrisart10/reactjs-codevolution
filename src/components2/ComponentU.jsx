import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentU() {
	const { count, dispatch } = useContext(CountContext);
	return (
		<div>
			ComponentU
			<div>
				<button onClick={() => dispatch("increment")}>Increment</button>
				<button onClick={() => dispatch("decrement")}>Decrement</button>
				<button onClick={() => dispatch("reset")}>Reset</button>
			</div>
		</div>
	);
}

export default ComponentU;
