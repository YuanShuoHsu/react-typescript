import "./App.css";

import Greet from "./components/props/Greet";
import Person from "./components/props/Person";
import PersonList from "./components/props/PersonList";
import Status from "./components/props/Status";
import Heading from "./components/props/Heading";
import Oscar from "./components/props/Oscar";
import Button from "./components/props/Button";
import Input from "./components/props/Input";
import Container from "./components/props/Container";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import UserContextProvider from "./components/context/UserContext";
import User from "./components/state/User";
import Counter from "./components/class/Counter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateliterals/Toast";

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
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter message="The count value is" />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, first: "Bruce", last: "Wayne" },
          { id: 2, first: "Clark", last: "Kent" },
          { id: 3, first: "Princess", last: "Diana" },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
    </div>
  );
}

export default App;
