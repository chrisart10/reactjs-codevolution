import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentZ() {
	const { count, dispatch } = useContext(CountContext);
	return (
		<div>
			ComponentZ
			<div>
				<button onClick={() => dispatch("increment")}>Increment</button>
				<button onClick={() => dispatch("decrement")}>Decrement</button>
				<button onClick={() => dispatch("reset")}>Reset</button>
			</div>
		</div>
	);
}

export default ComponentZ;
