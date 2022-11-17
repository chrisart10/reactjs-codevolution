import React from "react";
import ReactDOM from "react-dom";

function PortalDemo({ value }) {
	return ReactDOM.createPortal(
		<h1>{value}</h1>,
		document.querySelector("#Portal-root")
	);
}

export default PortalDemo;
