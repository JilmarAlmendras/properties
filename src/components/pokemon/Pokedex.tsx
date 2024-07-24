import { useEffect, useState } from "react";
import Pokelist from "./Pokelist";

interface Pokemon {
  name: string;
  url: string;
}

function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokeurl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    fetch(pokeurl)
      .then((res) => res.json())
      .then((res) => {
        setPokemons(res.results);
      });
  }, []);
  return (
    <>
      <h1>Pokedex</h1>
      <Pokelist pokemons={pokemons} />
      <button>previous</button>
      <button>next</button>
    </>
  );
}

export default Pokedex;
