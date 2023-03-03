import { useState } from "react";

const initState = {
  fname: "Bruce",
  lname: "Wayne",
};

function ObjectUseState() {
  const [person, setPerson] = useState(initState);
  function changeName() {
    person.fname = "Clark";
    person.lname = "Kent";
    // setPerson(person);
    setPerson({ ...person });
  }
  console.log("ObjectUseState Render");
  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
}

export default ObjectUseState;
