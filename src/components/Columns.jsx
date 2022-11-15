import React from "react";

function Columns() {
	const items = [{ id: 1, title: "Christian el chico cool" }];
	return (
		<>
			{items.map((item) => (
				<React.Fragment key={item.id}>
					<td>Title</td>
					<td>{item.title}</td>
				</React.Fragment>
			))}
		</>
	);
}

export default Columns;
