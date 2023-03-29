import "./App.css";

import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";

function App() {
  const personName = {
    first: "Yuan Shuo",
    last: "Hsu",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <Greet name="Brad" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dispario!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
    </div>
  );
}

export default App;
