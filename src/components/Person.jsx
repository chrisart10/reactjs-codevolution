function Person({ person }) {
	return (
		<h2>
			I'm {person.name}. I'm {person.age}. I know {person.skill}
		</h2>
	);
}

export default Person;
