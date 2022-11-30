import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentX() {
	const { count, dispatch } = useContext(CountContext);
	return (
		<div>
			ComponentX
			<div>
				<button onClick={() => dispatch("increment")}>Increment</button>
				<button onClick={() => dispatch("decrement")}>Decrement</button>
				<button onClick={() => dispatch("reset")}>Reset</button>
			</div>
		</div>
	);
}

export default ComponentX;
