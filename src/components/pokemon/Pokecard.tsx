import { useEffect, useState } from "react";

interface PokecardProps {
  pokeinfo: {
    name: string;
    url: string;
  };
}

interface InfoPokemon {
  photo: string;
  type: string;
}

function Pokecard(props: PokecardProps) {
  const { pokeinfo } = props;
  const [pokemon, setPokemon] = useState<InfoPokemon>();

  useEffect(() => {
    fetch(pokeinfo.url)
      .then((res) => res.json())
      .then((res) => {
        setPokemon({
          photo: res.sprites.other.dream_world.front_default,
          type: res.types[0].type.name,
        });
      });
  }, []);

  return (
    <div>
      <img src={pokemon?.photo} alt="imagen pokemon" />
      <p>{pokeinfo.name}</p>
      <p>{pokemon?.type}</p>
    </div>
  );
}

export default Pokecard;
