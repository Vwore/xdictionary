import { useState } from "react";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [word, setWord] = useState();
  const [definition, setDefinition] = useState("");
  function handleSearch(word) {
    const i = dictionary.findIndex(
      (val) => val.word.toLowerCase() === word.toLowerCase()
    );
    if (i !== -1) setDefinition(dictionary[i].meaning);
    else setDefinition("Word not found in the dictionary.");
  }
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(word);
        }}
      >
        <input
          placeholder="Search for a word..."
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        ></input>
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3> <p>{definition}</p>
    </div>
  );
}

export default App;
