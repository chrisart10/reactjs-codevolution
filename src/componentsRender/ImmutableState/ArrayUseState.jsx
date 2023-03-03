import { useState } from "react";
const initState = ["Bruce", "Wayne"];
function ArrayUseState() {
  const [persons, setPersons] = useState(initState);
  function handleClick() {
    // Bad Implementation
    // persons.push("Clark");
    // persons.push("Kent");
    // setPersons(persons);

    // Good Implementation
    const newPersons = [...persons];
    newPersons.push("Clark");
    newPersons.push("Kent");
    setPersons(newPersons);
  }
  console.log("ArrayUseState Render");
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
}

export default ArrayUseState;
