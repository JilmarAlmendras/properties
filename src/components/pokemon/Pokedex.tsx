import { useEffect, useState } from "react";
import Pokelist from "./Pokelist";

interface Pokemons {
  photo: string;
  name: string;
  url: string;
}

// interface Buttons {
//   previous: string;
//   next: string;
// }

function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.results);
        setPokemons(res.results);
      });
  }, []);
  return (
    <>
      <h1>Pokedex</h1>
      {/* <Pokelist photo={} name={} type={} /> */}
      <button>previous</button>
      <button>next</button>
    </>
  );
}

export default Pokedex;
