
import { useEffect, useState } from 'react';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const getFetch = async () => {
    try {
      const url = 'https://pokeapi.co/api/v2/berry/';
      const pokesJson = await fetch(url);
      const pokes = await pokesJson.json();
      setPokemons(pokemons);
      return pokes
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetch()
    .then(pokemons => console.log(pokemons))
    .catch(err => err)
    .finally(()=>{console.log("promesa cumplida");})
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <li key="pokemon.id">{pokemon.name}</li>
      ))}
    </div>
  );
}