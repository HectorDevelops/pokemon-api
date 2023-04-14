import './App.css';
import { useState } from 'react'

function App() {
  // Destructuring to update our data
  // Setting up useState as an empty array as we will be retrieving an array of pokemon
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    // Fetching a total of 807 pokemons
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => { return response.json() })
      .then(response => {
        setPokemons(response.results);
        // console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      {/* Creating the Button to be able to populate list of Pokemon */}
      <button onClick={fetchPokemons}> Fetch Pokemon </button>

      <ul>
        {
          // Creating a map function to iterate over the returned array list and return only name
          pokemons.map((item, i) => {return <li key={pokemons.id}>{item.name}</li>})
        }
      </ul>
    </div>
  );
}

export default App;
