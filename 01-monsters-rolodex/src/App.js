import React, { useState, useEffect } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

function App() {
  // const initialMonsters = [
  //   { name: "Frankenstein", id: "asc1" },
  //   { name: "Dracula", id: "asr2" },
  //   { name: "Zombie", id: "as1w" },
  // ];

  const initialMonsters = [];
  const [monsters, setMonsters] = useState(initialMonsters);
  const [filteredMonsters, setFilteredMonsters] = useState(initialMonsters);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const getData = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        //.then((response) => console.log(response.json()))
        //.then((users) => console.log(users));
        .then((users) => {
          setMonsters(users);
          setFilteredMonsters(users);
        });
    };
    getData();
  }, []); //this last parameter says that, run useEffect once only at load

  useEffect(() => {
    //console.log(searchField);
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    //console.log(filteredMonsters);
    setFilteredMonsters(filteredMonsters);
  }, [searchField]);

  const handleChange = (e) => {
    //console.log(e.target.value)
    setSearchField(e.target.value);
    //console.log(searchField); //you'll see that setting state is async function!!!
    //to eliminate that problem we have used useEffect!
  };

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="search monsters" handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

/*
  //This is not proper design. Because CardList should be responsible of creating the content (monsters)
  return (
    <div className="App">
      <CardList name="*** Justin! as a normal props ***">
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </CardList>
    </div>
  );
*/
