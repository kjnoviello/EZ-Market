
import { useEffect, useState } from 'react';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const getFetch = async () => {
    try {
      const url = 'https://pokeapi.co/api/v2/berry/';
      const pokesJson = await fetch(url);
      const pokes = await pokesJson.json();
      console.log(pokesJson);
      setPokemons(pokes.results);
    } catch (error) {
      console.log(error);
    }

    // .then((res) => res.json())
    // .then((res) => setPokemons(res.results))
    // .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <li key="pokemon.id">{pokemon.name}</li>
      ))}
    </div>
  );
}