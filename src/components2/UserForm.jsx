import React from "react";
import useInput from "./useInput";

function UserForm() {
	const [firstName, bindFirstName, resetFirstName] = useInput();
	const [lastName, bindLastName, resetLastName] = useInput();

	const submitHandler = (e) => {
		e.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
		resetFirstName();
		resetLastName();
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="firstname">First Name</label>

					<input {...bindFirstName} type="text" id="firstname" />
				</div>
				<div>
					<label htmlFor="lastname">Last Name</label>

					<input {...bindLastName} type="text" id="lastname" />
				</div>
				<button type="submit">submit</button>
			</form>
		</div>
	);
}

export default UserForm;
