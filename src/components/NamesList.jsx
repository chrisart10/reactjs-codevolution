function NameList() {
	const persons = [
		{ name: "Bruce", age: 30, skill: "React" },
		{ name: "clark", age: 25, skill: "Angular" },
		{ name: "Diana", age: 28, skill: "vue" },
	];
	const personList = persons.map((person) => (
		<h2>
			I'm {person.name}. I'm {person.age}. I know {person.skill}
		</h2>
	));
	return <div>{personList}</div>;
}

export default NameList;
