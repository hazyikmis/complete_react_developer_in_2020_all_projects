import React, { useState, useEffect } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

function App() {
  const initialMonsters = [
    { name: "Frankenstein", id: "asc1" },
    { name: "Dracula", id: "asr2" },
    { name: "Zombie", id: "as1w" },
  ];
  const [monsters, setMonsters] = useState(initialMonsters);

  useEffect(() => {
    function getData() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        //.then((response) => console.log(response.json()))
        //.then((users) => console.log(users));
        .then((users) => setMonsters(users));
    }
    getData();
  }, [initialMonsters]); //this last parameter says that, run useEffect if and only if state of "number" changes

  return (
    <div className="App">
      <CardList name="*** Justin! as a normal props ***">
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </CardList>
    </div>
  );
}

export default App;
